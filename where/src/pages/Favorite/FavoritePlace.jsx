import React from 'react'
import "../../css/Dashboard/content.css"
import photo from "../../images/1.jpg"

const FavoritePlace = () => {

  return (
    <div className="content">
      <form className="formtheme formaddlisting formwishlist">
        <fieldset>
          <div className="boxtitle">
            <h3>My Bookmarks</h3>
          </div>
          <div className="dashboardwishlists">
            <div className="themepost placespost">
              <a className="btndelpost" href="">x</a>
              <figure className="featuredimg"><a href=""><img src={photo} alt="image description" /></a></figure>
              <div className="postcontent">
                <h3><a href="">Tourist Guide</a></h3>
                <span className="catagory">Salt &amp; Pepper, New York</span>
                <div className="reviewcategory">
                  <div className="review">
                    <span className="stars"><span></span></span>
                    <em>(3 Review)</em>
                  </div>
                </div>
              </div>
            </div>
            <div className="themepost placespost">
              <a className="btndelpost" href="">x</a>
              <figure className="featuredimg"><a href=""><img src={photo} alt="image description" /></a></figure>
              <div className="postcontent">
                <h3><a href="">Tourist Guide</a></h3>
                <span className="catagory">Salt &amp; Pepper, New York</span>
                <div className="reviewcategory">
                  <div className="review">
                    <span className="stars"><span></span></span>
                    <em>(3 Review)</em>
                  </div>
                </div>
              </div>
            </div>
            <div className="themepost placespost">
              <a className="btndelpost" href="">x</a>
              <figure className="featuredimg"><a href="j"><img src={photo} alt="image description" /></a></figure>
              <div className="postcontent">
                <h3><a href="">Tourist Guide</a></h3>
                <span className="catagory">Salt &amp; Pepper, New York</span>
                <div className="reviewcategory">
                  <div className="review">
                    <span className="stars"><span></span></span>
                    <em>(3 Review)</em>
                  </div>
                </div>
              </div>
            </div>
            <div className="themepost placespost">
              <a className="btndelpost" href="">x</a>
              <figure className="featuredimg"><a href=""><img src={photo} alt="image description" /></a></figure>
              <div className="postcontent">
                <h3><a href="">Tourist Guide</a></h3>
                <span className="catagory">Salt &amp; Pepper, New York</span>
                <div className="reviewcategory">
                  <div className="review">
                    <span className="stars"><span></span></span>
                    <em>(3 Review)</em>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  )
}

export default FavoritePlace