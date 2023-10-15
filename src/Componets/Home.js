import React from 'react';
import './Home.css';
import Logo from './images/logo.webp';
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <>
    <div className='detail'>
    <div className="header_section " id="navbar">
    <div className="left_head">
        <a href="" id="images1"><img src={Logo} width="50px" height="50px" alt='tele' /></a>
        <div className="search" ><i className="fa fa-search" aria-hidden="true"></i><input className="input_search" type="search" placeholder="Search..." /></div>
    </div>
    <div className="center_head">
        <ul>
            <li className="active"><a href=""><i className="fa fa-home" aria-hidden="true" title="HOME"></i></a></li>
            <li><i className="fa fa-television" aria-hidden="true" title="WHATCH"></i></li>
            <li><i className="fa fa-users" aria-hidden="true" title="GROUPS"></i></li>
            <li><i className="fa fa-gamepad" aria-hidden="true" title="GAMES"></i></li>
        </ul>
    </div>
    <div className="right_head ">
        <ul>
            <li id="menu_btn"><a href=""><i className="fa fa-indent" aria-hidden="true" title="APPS" ></i></a></li>
            <div className="menus123 hide">
            <div className="menu_boxs" >
                <h3>Menu</h3>
                <div className="menu_box1">
                    <div className="left_heads">
                        <div className="search" ><i className="fa fa-search" aria-hidden="true"></i><input className="input_search" type="search" placeholder="Search..." /></div>
                    </div>
                    <h3>Social</h3>
                    <div className="solial_linkes">
                        <a href=""><i className="fa fa-calendar-o" aria-hidden="true"></i>EVENT</a>
                        <p>Length and appearance do not determine whether a section in a paper is a paragraph.</p>
                        
                    </div>
                    <div className="solial_linkes">
                        <a href=""><i className="fa fa-calendar-o" aria-hidden="true"></i>EVENT</a>
                        <p>Length and appearance do not determine whether a section in a paper is a paragraph.</p>
                    </div>
                    <div className="solial_linkes">
                        <a href=""><i className="fa fa-calendar-o" aria-hidden="true"></i>EVENT</a>
                        <p>Length and appearance do not determine whether a section in a paper is a paragraph.</p>
                    </div>

                    <div className="solial_linkes">
                        <a href=""><i className="fa fa-calendar-o" aria-hidden="true"></i>EVENT</a>
                        <p>Length and appearance do not determine whether a section in a paper is a paragraph.</p>
                    </div>
                  
                </div>


                <div className="menu_box2">
                    <h2>Create</h2>
                    <div className="links">
                        <a href=""><i className="fa fa-clipboard" aria-hidden="true"></i>Post</a>
                    </div>
                    
                    <div className="links">
                        <a href=""><i className="fa fa-clipboard" aria-hidden="true"></i>Post</a>
                    </div>

                    <div className="links">
                        <a href=""><i className="fa fa-clipboard" aria-hidden="true"></i>Post</a>
                    </div>

                    <div className="links">
                        <a href=""><i className="fa fa-clipboard" aria-hidden="true"></i>Post</a>
                    </div>

                    <div className="links">
                        <a href=""><i className="fa fa-clipboard" aria-hidden="true"></i>Post</a>
                    </div>

                    <div className="links">
                        <a href=""><i className="fa fa-clipboard" aria-hidden="true"></i>Post</a>
                    </div>

                    <div className="links">
                        <a href=""><i className="fa fa-clipboard" aria-hidden="true"></i>Post</a>
                    </div>
                    <div className="links">
                        <a href=""><i className="fa fa-clipboard" aria-hidden="true"></i>Post</a>
                    </div>
                    <div className="links">
                        <a href=""><i className="fa fa-clipboard" aria-hidden="true"></i>Post</a>
                    </div>
                </div> 
            </div>
            </div>
            <li><i className="fa fa-commenting" aria-hidden="true" title="MESSAGES"></i></li>
            <li><i className="fa fa-bell-o" aria-hidden="true" title="NOTIFICATION"></i></li>
            <Link to='/login'><img src={require('./images/7.jpg')} className='loves' alt='tele' /></Link>
        </ul>
    </div>
</div>


<div className="full_details">
        <div className="left_side">
            <div className="lists">
                <div className="profile"><img src={require('./images/2.jpg')} /><span>Dinesh Sekar</span></div>
                <div className="profile"><img src={require('./images/download (1).png')} /><span>Friends</span></div>
                <div className="profile"><img src={require('./images/download (2).png')} /><span>Event</span></div>
                <div className="profile"><img src={require('./images/download (3).png')} /><span>Feeds(Most Resents)</span></div>
                <div className="profile"><img src={require('./images/download (4).png')} /><span>Groups</span></div>
                <div className="profile"><img src={require('./images/download (5).png')} /><span>MarketPlace</span></div>
                <div className="profile"><img src={require('./images/6.jpg')} /><span>Watch</span></div>
                <div className="profile"><img src={require('./images/download (7).png')} /><span>Memories</span></div>
                <div className="profile"><img src={require('./images/download (8).png')} /><span>Save</span></div>
                <div className="profile"><img src={require('./images/save.png')} /><span>Pages</span></div>
                <div className="profile"><img src={require('./images/images.jpg')} /><span>Dinesh sekar</span></div>
                <div className="profile1"><i className="fa fa-chevron-circle-down" aria-hidden="true"></i> <span> See More </span></div>
            </div>
        </div>
    </div>


    <div className="center_side">
            <div className="centrbox">
                {/* <div className="header">
                    <a className="active" href=""><i className="fa fa-book" aria-hidden="true"></i>Stories</a>
                    <a href=""><i className="fa fa-window-restore" aria-hidden="true"></i>Reels</a>
                    <a href=""><i className="fa fa-video-camera" aria-hidden="true"></i>Rooms</a>
                </div> */}
                <div className="borders"></div> 
                 <div className="boxcount_1">
                    <div className="box1">
                        <img src={require('./images/6.jpg')} className='satus' alt=''/>
                        <div className='status_names'>
                        <h4>Dinesh</h4>
                        <p>Mass</p>
                        </div>
                    </div>
                    <div className="box2">
                        <img src={require('./images/7.jpg')} className='satus' alt=''/>
                        <div className='status_names'>
                        <h4>Pratheep</h4>
                        <p>Talent Boys</p>
                        </div>
                    </div>
                    <div className="box3">
                        <img src={require('./images/8.jpg')} className='satus' alt=''/>
                        <div className='status_names'>
                        <h4>Vicky</h4>
                        <p>Daty Boy</p>
                        </div>
                    </div>
                    <div className="box4">
                        <img src={require('./images/5.jpg')} className='satus' alt=''/>
                        <div className='status_names'>
                        <h4>Kumar</h4>
                        <p>Smart Boy</p>
                        </div>
                    </div>
                 </div>
            </div>
            <div className="next_box">
                <div className="left_head">
                    <a href="" id="images1"><img src={require('./images/2.jpg')} width="50px" height="50px" /></a>
                    <div className="search" ><i className="fa fa-search" aria-hidden="true"></i><input className="input_search" type="search" placeholder="Search..." /></div>
                </div>
                <div className="borders1"></div>
                <div className="header1">
                    <a className="active" href=""><i class="fa fa-video-camera" aria-hidden="true"></i> Live Videos</a>
                    <a href=""><i class="fa fa-picture-o" aria-hidden="true"></i>Photo/Videos</a>
                    <a href=""><i class="fa fa-smile-o" aria-hidden="true"></i>Feeling/Activite</a>
                </div>
            </div>

            <div className="box_content">
                <div className="centerhead">
                    <a href="" id="images1"><img src={require('./images/3.jpg')} width="50px" height="50px" /></a>
                    <div className="name12" >
                        <a href=""><h3>Sutharasan K<span><i className="fa fa-ellipsis-h" aria-hidden="true"></i><i className="fa fa-times" aria-hidden="true"></i></span></h3></a>
                        <p>June 17 06 2023 <i className="fa fa-users" aria-hidden="true"></i></p>
                    </div>
                </div>
                <div className="borders2"></div>
                <div className="images_boxes">
                    <img src={require('./images/2.jpg')} width="100%" height="400px" />
                </div>
                <div className="borders2"></div>
                <div className="likes">
                    <a href=""><i className="fa fa-thumbs-up" aria-hidden="true">Naga And Others 14</i><span>1<i className="fa fa-commenting" aria-hidden="true"></i></span></a>
                  
                </div>
                <div className="borders2"></div>

                <div className="likes1">
                    <a href=""><i className="fa fa-thumbs-up" aria-hidden="true">Like 14</i><span><i className="fa fa-commenting" aria-hidden="true">Commands</i></span></a>
                  
                </div>
                <div className="borders2"></div>

                <div className="left_head">
                    <a href="" id="images1"><img src={require('./images/4.jpg')} width="50px" height="50px"/></a>
                    <div className="search" ><i className="fa fa-search" aria-hidden="true"></i><input className="input_search" type="search" placeholder="Search..." /></div>
                </div>
            </div>
<br></br>
            <div className="centrbox">
                <div className="boxcount_1">
                    <div className="box1"></div>
                    <div className="box2"></div>
                    <div className="box3"></div>
                    <div className="box4"></div>
                 </div>
                 
            </div>

            <div className="box_content">
               <h4>Suggested for you</h4>
                <div className="borders2"></div>
                <div className="centerhead">
                    <a href="" id="images1"><img src={require('./images/2.jpg')} width="50px" height="50px" /></a>
                    <div className="name12" >
                        <a href=""><h3>Pratheep<span><i className="fa fa-ellipsis-h" aria-hidden="true"></i><i className="fa fa-times" aria-hidden="true"></i></span></h3></a>
                        <p>Aug 01 06 2023 <i className="fa fa-users" aria-hidden="true"></i></p>
                    </div>
                </div>
                    <div className="borders2"></div>
                    <div className="images_boxes">
                        <img src={require('./images/3.jpg')} width="100%" height="400px" />
                    </div>
                    <div className="borders2"></div>
                    <div className="likes">
                        <a href=""><i className="fa fa-thumbs-up" aria-hidden="true">Naga And Others 14</i><span>1<i className="fa fa-commenting" aria-hidden="true"></i> <i className="fa fa-share" aria-hidden="true">8  Share</i></span></a>
                    </div>
                <div className="borders2"></div>

                <div className="likes1">
                    <a href=""><i className="fa fa-thumbs-up" aria-hidden="true">Like 14</i><span><i className="fa fa-commenting" aria-hidden="true">Commands</i></span><span><i className="fa fa-share" aria-hidden="true">Share</i></span></a>
                </div>
            </div>
            <div className="box_content">
                <h4>Suggested for you</h4>
                 <div className="borders2"></div>
                 <div className="centerhead">
                     <a href="" id="images1"><img src={require('./images/5.jpg')} width="50px" height="50px" /></a>
                     <div className="name12" >
                         <a href=""><h3>Kumar  <span><i className="fa fa-ellipsis-h" aria-hidden="true"></i><i className="fa fa-times" aria-hidden="true"></i></span></h3></a>
                         <p>June 17 06 2023 <i className="fa fa-users" aria-hidden="true"></i></p>
                     </div>
                 </div>
                     <div className="borders2"></div>
                     <div className="images_boxes">
                         <img src={require('./images/6.jpg')} width="100%" height="400px" />
                     </div>
                     <div className="borders2"></div>
                     <div className="likes">
                         <a href=""><i className="fa fa-thumbs-up" aria-hidden="true">Naga And Others 14</i><span>1<i className="fa fa-commenting" aria-hidden="true"></i> <i className="fa fa-share" aria-hidden="true">8  Share</i></span></a>
                     </div>
                 <div className="borders2"></div>
 
                 <div className="likes1">
                     <a href=""><i className="fa fa-thumbs-up" aria-hidden="true">Like 14</i><span><i className="fa fa-commenting" aria-hidden="true">Commands</i></span></a>
                 </div>
             </div>
             <div className="box_content">
                <h4>Suggested for you</h4>
                 <div className="borders2"></div>
                 <div className="centerhead">
                     <a href="" id="images1"><img src={require('./images/6.jpg')} width="50px" height="50px" /></a>
                     <div className="name12" >
                         <a href=""><h3>Dinesh<span><i className="fa fa-ellipsis-h" aria-hidden="true"></i><i className="fa fa-times" aria-hidden="true"></i></span></h3></a>
                         <p>May 30 06 2023 <i className="fa fa-users" aria-hidden="true"></i></p>
                     </div>
                 </div>
                     <div className="borders2"></div>
                     <div className="images_boxes">
                         <img src={require('./images/7.jpg')} width="100%" height="400px" />
                     </div>
                     <div className="borders2"></div>
                     <div className="likes">
                         <a href=""><i className="fa fa-thumbs-up" aria-hidden="true">Kathir And Others 14</i><span>1<i className="fa fa-commenting" aria-hidden="true"></i> <i className="fa fa-share" aria-hidden="true">8  Share</i></span></a>
                     </div>
                 <div className="borders2"></div>
 
                 <div className="likes1">
                     <a href=""><i className="fa fa-thumbs-up" aria-hidden="true">Like 14</i><span><i className="fa fa-commenting" aria-hidden="true">Commands</i></span><span><i className="fa fa-share" aria-hidden="true">Share</i></span></a>
                 </div>
             </div>

             <div className="box_content">
                <div className="centerhead">
                    <a href="" id="images1"><img src={require('./images/8.jpg')} width="50px" height="50px" /></a>
                    <div className="name12" >
                        <a href=""><h3>Vicky <span><i className="fa fa-ellipsis-h" aria-hidden="true"></i><i className="fa fa-times" aria-hidden="true"></i></span></h3></a>
                        <p>October 19 06 2023 <i className="fa fa-users" aria-hidden="true"></i></p>
                    </div>
                </div>
                <div className="borders2"></div>
                <div className="images_boxes">
                    <img src={require('./images/9.jpg')} width="100%" height="400px"/>
                </div>
                <div className="borders2"></div>
                <div className="likes">
                    <a href=""><i className="fa fa-thumbs-up" aria-hidden="true">Naga And Others 14</i><span>1<i className="fa fa-commenting" aria-hidden="true"></i></span></a>
                  
                </div>
                <div className="borders2"></div>

                <div className="likes1">
                    <a href=""><i className="fa fa-thumbs-up" aria-hidden="true">Like 14</i><span><i className="fa fa-commenting" aria-hidden="true">Commands</i></span></a>
                  
                </div>
                <div className="borders2"></div>

                <div className="left_head">
                    <a href="" id="images1"><img src={require('./images/7.jpg')} width="50px" height="50px" /></a>
                    <div className="search" ><i className="fa fa-search" aria-hidden="true"></i><input className="input_search" type="search" placeholder="Search..." /></div>
                </div>
            </div>


            <div className="centrbox">
                <div className="boxcount_1">
                    <div className="box1"></div>
                    <div className="box2"></div>
                    <div className="box3"></div>
                    <div className="box4"></div>
                 </div>
            </div>



            <div className="box_content">
                <div className="centerhead">
                    <a href="" id="images1"><img src={require('./images/6.jpg')} width="50px" height="50px" /></a>
                    <div className="name12" >
                        <a href=""><h3>Shalini Srinivasn <span><i className="fa fa-ellipsis-h" aria-hidden="true"></i><i className="fa fa-times" aria-hidden="true"></i></span></h3></a>
                        <p>May 20 06 2023 <i className="fa fa-users" aria-hidden="true"></i></p>
                    </div>
                </div>
                <div className="borders2"></div>
                <div className="images_boxes">
                    <img src={require('./images/8.jpg')} width="100%" height="400px" /> 
                </div>
                <div className="borders2"></div>
                <div className="likes">
                    <a href=""><i className="fa fa-thumbs-up" aria-hidden="true">Naga And Others 14</i><span>1<i className="fa fa-commenting" aria-hidden="true"></i></span></a>
                  
                </div>
                <div className="borders2"></div>

                <div className="likes1">
                    <a href=""><i className="fa fa-thumbs-up" aria-hidden="true">Like 14</i><span><i className="fa fa-commenting" aria-hidden="true">Commands</i></span></a>
                  
                </div>
                <div className="borders2"></div>

                <div className="left_head">
                    <a href="" id="images1"><img src={require('./images/5.jpg')} width="50px" height="50px" /></a>
                    <div className="search" ><i className="fa fa-search" aria-hidden="true"></i><input className="input_search" type="search" placeholder="Search..." /></div>
                </div>
            </div>
        </div>  


        <div className="right_side">
            <div className="icons">
              <div className="heading"><h3>Contacts</h3></div>
              <div className="save">
                    <i className="fa fa-video-camera" aria-hidden="true"></i>
                    <i className="fa fa-search" aria-hidden="true"></i>
                    <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
              </div> 
            </div>
            <div className="lis">
                <div className="profile"><img src={require('./images/3.jpg')} /><span>Dinesh sekar</span></div>
                <div className="profile"><img src={require('./images/4.jpg')} /><span>Sasi</span></div>
                <div className="profile"><img src={require('./images/5.jpg')} /><span>Pratheep</span></div>
                <div className="profile"><img src={require('./images/6.jpg')} /><span>Vicky</span></div>
                <div className="profile"><img src={require('./images/7.jpg')} /><span>Ravi</span></div>
                <div className="profile"><img src={require('./images/8.jpg')} /><span>Kumar</span></div>
                <div className="profile"><img src={require('./images/9.jpg')} /><span>Mohan</span></div>
                <div className="profile"><img src={require('./images/download (1).png')} /><span>Sutharasan</span></div>
                <div className="profile"><img src={require('./images/download (2).png')}/><span>Moorthi</span></div>
                <div className="profile"><img src={require('./images/download (3).png')}/><span>Muthuvel</span></div>
                <div className="profile"><img src={require('./images/download (4).png')}/><span>Ramesh</span></div>
                <div className="profile"><img src={require('./images/download (5).png')} /><span>Eswarai</span></div>
                <div className="profile"><img src={require('./images/download (6).png')} /><span>Saranya</span></div>
                      <div className="profile"><img src={require('./images/download (7).png')} /><span>Gokul</span></div>
                <div className="profile"><img src={require('./images/download (8).png')} /><span>Harish</span></div>
                <div className="profile"><img src={require('./images/4.jpg')} /><span>Ganapathi</span></div>
                <div className="profile"><img src={require('./images/5.jpg')} /><span>Suvithra.S</span></div>
                <div className="profile"><img src={require('./images/8.jpg')} /><span>Priya</span></div>
                <div className="profile"><img src={require('./images/5.jpg')} /><span>Palanivel</span></div>
                <div className="profile"><img src={require('./images/9.jpg')} /><span>Prabu</span></div>
                <hr></hr>
            </div>
        </div>
        
</div>
</>
  )
}

export default Home