import React, { useState, useEffect } from 'react';
import { geoCentroid } from "d3-geo";
import {
    ComposableMap,
    Geographies,
    Geography,
    Marker,
    ZoomableGroup
} from "react-simple-maps";
import CustomCarousel from './CustomCarousel';
import allDistricts from "../data/allDistricts.json";
import { ReactComponent as CurvedArrow } from '../assets/images/icons/curved-arrow.svg';
import { ReactComponent as MarkerIcon } from '../assets/images/icons/marker-icon.svg';
const geoUrl = 'https://raw.githubusercontent.com/PrzemekSobolewski/Poland-Map-LandingPage/master/src/data/poland.json';

const MapChart = (props) => {
    const [center, setCenter] = useState([19, 52]);
    const [deviceWidth, setDeviceWidth] = useState(0);
    const [carouselImagesId, setCarouselImagesId] = useState(0);
    const [carouselVisibility, setCarouselVisibility] = useState(false);
    const [activeMarkerId, setActiveMarkerId] = useState('');

    useEffect(() => {
        setDeviceWidth(window.screen.width);
    }, [])

    const handleRegionClick = (e) => {
        const id = e.target.getAttribute('data-rel');
        setCarouselImagesId(id)
        setCarouselVisibility(true);
    }
    const handleRegionMouseEnter = (e, geoId) => {
        e.preventDefault();
        setActiveMarkerId(geoId);
    }
    const handleRegionMouseLeave = (e) => {
        e.preventDefault();
        setActiveMarkerId('');
    }

    return (
        <div className="container">
            <div className="landing-page-container">
                <div className="row">
                    <div className="landing-page-content col-md-8">
                        <div className="map-container col-md-12">
                            <ComposableMap>
                                <ZoomableGroup center={center} zoom={30} minZoom={30} maxZoom={(deviceWidth < 500) ? 50 : 30} >
                                    <Geographies geography={geoUrl}>
                                        {({ geographies }) => (
                                            <>
                                                {geographies.map(geo => (
                                                    <Geography
                                                        strokeWidth="0.03"
                                                        stroke="#fff"
                                                        key={geo.rsmKey}
                                                        geography={geo}
                                                        fill="#DDD"
                                                        data-rel={geo.id}

                                                        onClick={handleRegionClick}
                                                        onMouseEnter={e => handleRegionMouseEnter(e, geo.id)}
                                                        onMouseLeave={handleRegionMouseLeave}
                                                    />
                                                ))};
                                                {geographies.map(geo => {
                                                    const cur = allDistricts.find(s => s.val == geo.id);
                                                    return (
                                                        <Marker key={geo.id} data-rel={cur.val} coordinates={geoCentroid(geo)}>
                                                            <g className={(activeMarkerId === geo.id) ? "marker-svg active" : "marker-svg"} transform="translate(-1.5, -1.5)">
                                                                <MarkerIcon />
                                                            </g>
                                                            <text className={(activeMarkerId === geo.id) ? "marker-text active" : "marker-text"} y="-0.8" fontSize={0.5} textAnchor="middle">
                                                                {cur.id}
                                                            </text>
                                                        </Marker>
                                                    );
                                                })};
                                            </>
                                        )}
                                    </Geographies>
                                </ZoomableGroup>
                            </ComposableMap>

                            <div className="short-desc">
                                <p className="desktop-only">Wybierz region i daj się zaskoczyć pięknymi krajobrazami</p>
                                <div className="col-md-12 title-rwd mobile-only">
                                    <CurvedArrow />
                                    <div>
                                        <span>Zakochaj się w Polsce</span>
                                    </div>
                                </div>
                                <div className="col-md-12 button-rwd mobile-only">
                                    <div>
                                        <div className="button" onClick={() => props.scrollToContentProp()}>Dowiedz się więcej</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="background-2 col-md-4 desktop-only">
                        <div className="background-2 bottom-part row">
                            <div className="col-md-12 title-container">
                                <CurvedArrow />
                                <div>
                                    <span>Zakochaj się w Polsce</span>
                                </div>
                            </div>
                            <div className="col-md-12 button-container">
                                <div>
                                    <div className="button" onClick={() => props.scrollToContentProp()}>Dowiedz się więcej</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={carouselVisibility ? "carousel-container active" : "carousel-container"}>
                    <span className={"close-carousel"} onClick={() => setCarouselVisibility(false)}></span>
                    <CustomCarousel imagesId={carouselImagesId} />
                </div>
            </div>
        </div>
    );
};

export default MapChart;
