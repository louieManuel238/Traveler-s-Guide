const RoomIcon = () =>{

    return (<svg width="30" height="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#50E3C2" stroke="#50E3C2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  <path d="M12 21s-7-7.5-7-12a7 7 0 1 1 14 0c0 4.5-7 12-7 12z" fill="#50E3C2"/>
  <circle cx="12" cy="9" r="3" fill="white"/>
</svg>)
}

const LoadingMarker = () =>{
  return (<svg xmlns="http://www.w3.org/2000/svg" width="100px" height="120px" viewBox="0 0 100 120">
  <g>
    <animateTransform 
      attributeType="XML" 
      attributeName="transform" 
      type="translate" 
      values="0,0; 0,-10; 0,0" 
      dur="1.2s" 
      repeatCount="indefinite"
      keyTimes="0; 0.5; 1"
      calcMode="ease-in-out"/>

    <path fill="#50E3C2" d="M50,15 C30,15 20,35 20,50 C20,75 50,110 50,110 C50,110 80,75 80,50 C80,35 70,15 50,15 Z"/>
    <circle cx="50" cy="42" r="13" fill="white"/>
    <circle cx="50" cy="42" r="5" fill="black">
      <animate attributeName="cx" values="48; 52; 48" dur="1s" repeatCount="indefinite" keyTimes="0; 0.5; 1" calcMode="ease-in-out"/>
    </circle>
  </g>


  <ellipse cx="50" cy="115" rx="15" ry="5" fill="rgba(0,0,0,0.3)">
    <animate 
      attributeName="opacity" 
      values="0.6; 0.2; 0.6" 
      dur="1.2s" 
      repeatCount="indefinite"/>
    <animateTransform 
      attributeType="XML" 
      attributeName="transform" 
      type="scale" 
      values="1,1; 1.2,1; 1,1" 
      dur="1.2s" 
      repeatCount="indefinite"/>
  </ellipse>
</svg>
  )
}
export {RoomIcon, LoadingMarker}