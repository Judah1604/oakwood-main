import ImgUnderlay from "../../utils/ImgUnderlay";
import "./styles/styles.css";

function Gallery() {
  return (
    <>
      <div className="container gallery">
        <ImgUnderlay title={"Gallery"} />
        <div className="images my-5 row">
          <div className="col-md-4 mb-3"><img src="/gallery/land.JPG" alt="LAND" /></div>
          <div className="col-md-4 mb-3"><img src="/gallery/land2.JPG" alt="LAND" /></div>
          <div className="col-md-4 mb-3"><img src="/gallery/land3.JPG" alt="LAND" /></div>
          <div className="col-md-4 mb-3"><img src="/gallery/land4.JPG" alt="LAND" /></div>
          <div className="col-md-4 mb-3"><img src="/gallery/land5.JPG" alt="LAND" /></div>
          <div className="col-md-4 mb-3"><img src="/gallery/land6.JPG" alt="LAND" /></div>
          <div className="col-md-4 mb-3"><img src="/gallery/land7.JPG" alt="LAND" /></div>
          <div className="col-md-4 mb-3"><img src="/gallery/land8.JPG" alt="LAND" /></div>
          <div className="col-md-4 mb-3"><img src="/gallery/land9.JPG" alt="LAND" /></div>
          <div className="col-md-4 mb-3"><img src="/gallery/land10.JPG" alt="LAND" /></div>
          <div className="col-md-4 mb-3"><img src="/gallery/land11.JPG" alt="LAND" /></div>
          <div className="col-md-4 mb-3"><img src="/gallery/land12.JPG" alt="LAND" /></div>
          <div className="col-md-4 mb-3"><img src="/gallery/land13.JPG" alt="LAND" /></div>
          <div className="col-md-4 mb-3"><img src="/gallery/land14.JPG" alt="LAND" /></div>
          <div className="col-md-4 mb-3"><img src="/gallery/land15.JPG" alt="LAND" /></div>
          <div className="col-md-4 mb-3"><img src="/gallery/land16.JPG" alt="LAND" /></div>
          <div className="col-md-4 mb-3"><img src="/gallery/land17.JPG" alt="LAND" /></div>
        </div>
      </div>
    </>
  );
}
export default Gallery;
