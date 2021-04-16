
function SvgImage() {
     const imgStyle = {
          height: '400px',
          width: '400px',
          padding: '10px'
     }
     return (
          <div className="login-image">
               <img style={imgStyle} src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.freepik.com%2Ffree-vector%2Flogin-concept-illustration_114360-739.jpg&f=1&nofb=1" alt="svg-image" />
          </div>
     ); 
}

export default SvgImage;