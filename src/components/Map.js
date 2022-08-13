import React from 'react'
import { GoogleMap, useLoadScript } from "@googlemaps/react-wrapper"

const Map = () => {
    
    const {} = useLoadScript({GoogleMapsApiKey:""});

  return (
    <div>map</div>
  )
}

export default Map