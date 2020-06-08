import React, { Fragment, useState } from 'react';
import { useLocation } from 'library/hooks/useLocation';
import Sticky from 'react-stickynode';
import Row from 'components/UI/Antd/Grid/Row';
import Col from 'components/UI/Antd/Grid/Col';
import Modal from 'components/UI/Antd/Modal/Modal';
import Button from 'components/UI/Antd/Button/Button';
import Container from 'components/UI/Container/Container';
import Loader from 'components/Loader/Loader';
import useWindowSize from 'library/hooks/useWindowSize';
import Description from './Description/Description';
import Amenities from './Amenities/Amenities';
import Location from './Location/Location';
import Review from './Review/Review';
import Reservation from './Reservation/Reservation';
import BottomReservation from './Reservation/BottomReservation';
import TopBar from './TopBar/TopBar';
import SinglePageWrapper, { PostImage } from './SinglePageView.style';
import PostImageGallery from './ImageGallery/ImageGallery';
import useDataApi from 'library/hooks/useDataApi';

import isEmpty from 'lodash/isEmpty';

const SinglePage = ({ match }) => {
  const { href } = useLocation();
  const [isModalShowing, setIsModalShowing] = useState(false);
  const { width } = useWindowSize();

  let url = '/api/trips/'+ match.params.slug;
  if (!match.params.slug) {
    url += match.params.slug;
  }
  const { data, loading } = useDataApi(url, 1);
  if (isEmpty(data) || loading) return <Loader />;
  const {
    price,
    title,
    gallery,
    description,
    location_details,
    organizer
  } = data;

  return (
    <SinglePageWrapper>
  
      <TopBar title={title} shareURL={href} />

      <Container>
        <Row gutter={30} id="reviewSection" style={{ marginTop: 30 }}>
          <Col xl={16}>
            <Description
              content={description}
              title={title}
            />
            { gallery.length>=1 && <PostImageGallery images={gallery} /> }
            <Amenities data={data} />
            <Location location_details={location_details} />
          </Col>
          <Col xl={8}>
            {width > 1200 ? (
              <Sticky
                innerZ={999}
                activeClass="isSticky"
                top={202}
                bottomBoundary="#reviewSection"
              >
                <Reservation price={price} organizer={organizer} />
              </Sticky>
            ) : (
              <BottomReservation
                title={title}
                price={price}
              />
            )}
          </Col>
        </Row>
        {/*<Row gutter={30}>
          <Col xl={16}>
            <Review
              reviews={reviews}
              ratingCount={ratingCount}
              rating={rating}
            />
          </Col>
          <Col xl={8} />
        </Row> */}
      </Container>
    </SinglePageWrapper>
  );
};

export default SinglePage;
