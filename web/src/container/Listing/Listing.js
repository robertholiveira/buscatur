import React, { useState, Fragment } from 'react';
import Sticky from 'react-stickynode';
import Toolbar from 'components/UI/Toolbar/Toolbar';
import CategotySearch from 'components/Search/CategorySearch/CategotySearch';
import { PostPlaceholder } from 'components/UI/ContentLoader/ContentLoader';
import SectionGrid from 'components/SectionGrid/SectionGrid';
import ListingMap from './ListingMap';
import FilterDrawer from 'components/Search/MobileSearchView';
import useWindowSize from 'library/hooks/useWindowSize';
import useDataApi from 'library/hooks/useDataApi';
import { SINGLE_POST_PAGE } from 'settings/constant';
import { setStateToUrl, getStateFromUrl } from '../../library/helpers/url_handler';
import Api from '../../services/api'

import ListingWrapper, { PostsWrapper, ShowMapCheckbox } from './Listing.style';
import { render } from 'react-dom';

class Listing extends React.Component  {
  state = {
    width :  window.innerWidth,
    url :  '/api/trips',
    trips: [],
    filteredTrips: [],
    loadingData: true,
    columnWidth : [1 / 1, 1 / 2, 1 / 3, 1 / 4, 1 / 5]
  }

  filterTrips = () => {

    let { trips } = this.state; 

    let filtros = getStateFromUrl(this.props.location);
  
    if(filtros.destaques){
      if(filtros.destaques.includes('cafe')){
        trips = trips.filter( item => { return item.have_breakfast });
      }
      if(filtros.destaques.includes('wifi')){
        trips = trips.filter( item => { return item.have_wifi });
      }
      if(filtros.destaques.includes('almoco')){
        trips = trips.filter( item => { return item.have_lunch });
      }
      if(filtros.destaques.includes('jantar')){
        trips = trips.filter( item => { return item.have_dinner });
      }
      if(filtros.destaques.includes('piscina')){
        trips = trips.filter( item => { return item.have_pool });
      }
      if(filtros.destaques.includes('arcondicionado')){
        trips = trips.filter( item => { return item.have_air });
      }
      if(filtros.destaques.includes('guia')){
        trips = trips.filter( item => { return item.have_guide });
      }
      if(filtros.destaques.includes('passeios')){
        trips = trips.filter( item => { return item.have_tour });
      }  
    }

    if(filtros.price){
      trips = trips.filter( item => {
        return (item.price < filtros.price.max && item.price > filtros.price.min)
      })
    }
    this.setState( { filteredTrips : trips })
  }

  componentDidMount(){
    this.getData();
  }

  getData = () => {
    Api.get('/api/trips')
    .then( res => {
      this.setState({
        trips: res.data,
        filteredTrips: res.data,
        loadingData: false
      });
      this.filterTrips();
    });
  }

  render(){

    const { filteredTrips, loadingData, width } = this.state;

    return (
      <ListingWrapper>
        <Sticky top={82} innerZ={999} activeClass="isHeaderSticky">
          <Toolbar
            left={
              width > 991 ? (
                <CategotySearch history={this.props.history} filterTrips={this.filterTrips} location={this.props.location} />
              ) : (
                <FilterDrawer history={this.props.history} location={this.props.location} />
              )
            }
          />
        </Sticky>
  
        <Fragment>
          <PostsWrapper className={'col-24'}>
            <SectionGrid
              link={SINGLE_POST_PAGE}
              columnWidth={this.state.columnWidth}
              data={filteredTrips}
              totalItem={filteredTrips.length}
              loading={loadingData}
              limit={30}
              placeholder={<PostPlaceholder />}
            />
          </PostsWrapper>
        </Fragment>
      </ListingWrapper>
    );
  }
}

export default Listing;