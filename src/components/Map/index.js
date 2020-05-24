import React from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import styled from 'styled-components';

const Wrapper = styled.div`
   width: ${props => props.width};
   height: ${props => props.height};
`;

 export default class Map extends React.Component{
   componentDidMount(){
     this.map = L.map('map', {
       center: [10,10],
       zoom:2,
     });
     L.tileLayer('https://assets.rockpapershotgun.com/images/2020/03/Verdansk-3k.jpg', {
       detectRetina: true,
     }).addTo(this.map);
   }

   render(){
     return <Wrapper width="1280px" height="720px" id="map" />
   }
 }
