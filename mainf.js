        //<![CDATA[

if (pageType == "item") {
            var myIMG = document.getElementById("item-article").getElementsByTagName("img");
for (var x =0 ; x < myIMG.length; x++) {

 
myIMG[x].setAttribute("loading", "lazy");




}
            
  }   
       

    
      //]]>
       
       
              /*<![CDATA[*/

     
             
   
             
              /*<![CDATA[*/




      var templateUsers;
            
                          var isValid = 0;



// begin optimizing 


               if ( pageType == "item" ||  window.location.href == homePage || window.location.href == homePage + "?m=1" ) {


(function relatedPF(){
    return new Promise((resolve,reject)=>{


                    
                    
var myPosts = new Array(); 

       var fetchLabelURL = homePage  +"/feeds/posts/default/-/" + myLabelName_1 + "?alt=json-in-script&max-results=100"; 
console.log(fetchLabelURL);
   
var getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'jsonp';
    xhr.onload = function() {
      var status = xhr.status;
      if (status === 200) {
        callback(null, xhr.response);
      } else {
        callback(status, xhr.response);
      }
    };
    xhr.send();
};



getJSON(fetchLabelURL,
function(err, data) {
  if (err === null) {
  
                   console.log(data); 
console.log(typeof(data));

 data = data.replace('gdata.io.handleScriptLoaded(','');

data = data.substring(0, data.length-2);

 data = JSON.parse(data);
                   console.log(data + "nn"); 
console.log(typeof(data)  + "nn");





  if (screen.width < 485) {

               var post_thumbnail_width = screen.width - 40;
               var post_thumbnail_height = 160 ;
 
} 
else if (screen.width < 978 && screen.width >485  ) {
               var post_thumbnail_width = screen.width/2 -40;
               var post_thumbnail_height = 120;
               
               }
 else {
               
               var post_thumbnail_width = 1100/4 - 40;
               var post_thumbnail_height = 120;
               
               }
               

               var max_related_entries;
               function escapeRegExp(string) {
                   return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
               }
               
               function replaceAll(str, term, replacement) {
                   return str.replace(new RegExp(escapeRegExp(term), "g"), replacement)
               }


var containerDiv , relatedpoststitle; 

              if (pageType == "item") { 
containerDiv = "related-posts"; 
 relatedpoststitle = (window.location.href, "تدوينات ذات صلة"); 
              max_related_entries = 3;
console.log(containerDiv);  

} else {
 relatedpoststitle = (window.location.href, "مقالات من " + myLabelName_1); 

containerDiv = "featured-posts" ;
             max_related_entries = 4;

console.log(containerDiv);  

}


                   console.log(data); 
                   for ( post_titles = new Array, post_comments = new Array, author_image= new Array, post_summary = new Array, post_time = new Array, post_authors= new Array, post_tags = new Array, post_num = 0, post_urls = new Array, post_thumbnail_url = new Array, i = 0; i < data.feed.entry.length; i++) {
                       var feed_entry = data.feed.entry[i];
                       post_titles[post_num] = feed_entry.title.$t;
                               post_tags[post_num] = feed_entry.category[0].term;
                               post_authors[post_num] = feed_entry.author[0].name.$t;
                                               post_time[post_num] = feed_entry.published.$t;
                                            //   post_summary[post_num] = feed_entry.summary.$t;
                                               post_comments[post_num] = feed_entry.thr$total.$t;
                                author_image[post_num] = feed_entry.author[0].gd$image.src	;
                    console.log(post_tags[post_num]) ;
                          
                       try {
                           post_thumbnail_url[post_num] = feed_entry.media$thumbnail.url
                       } catch (error) {
                           s = feed_entry.content.$t, a = s.indexOf("<img"), b = s.indexOf('src="', a), c = s.indexOf('"', b + 5), d = s.substr(b + 5, c - b - 5), -1 != a && -1 != b && -1 != c && "" != d ? post_thumbnail_url[post_num] = d : "undefined" != typeof defaultnoimage ? post_thumbnail_url[post_num] = defaultnoimage : post_thumbnail_url[post_num] = "https://i.ibb.co/yS6JvBh/no-image.jpg"
                       }
                       for (var k = 0; k < feed_entry.link.length; k++) "alternate" == feed_entry.link[k].rel && (post_urls[post_num] = feed_entry.link[k].href, post_num++)
                   }
                   
                   var random_entry = Math.floor((post_titles.length - 1) * Math.random()),
                       iteration = 0;
                   if (post_titles.length > 0 ) {
                       var rp_heading = document.createElement("h5"),
                           textnode = document.createTextNode(relatedpoststitle);
                       rp_heading.classList.add("tittle");
                       rp_heading.appendChild(textnode), document.getElementById(containerDiv).appendChild(rp_heading);
                      
                   }
               
                   for (; iteration < post_titles.length && 20 > iteration && max_related_entries > iteration;)
               
                       if (post_urls[random_entry] != currentURL) {
               
                var rp_container = document.createElement("div");
               
                       rp_container.setAttribute("style", "clear: both;"), rp_container.setAttribute("id", "rp_container-" + iteration ),rp_container.setAttribute("class", "rp-div"),document.getElementById(containerDiv).appendChild(rp_container); 

               
                           var rp_anchor = document.createElement("a");
                          rp_anchor.setAttribute("id", "rp-anchor-" + iteration), rp_anchor.setAttribute("href", post_urls[random_entry]), rp_anchor.setAttribute("class", "featured-item-data"), document.getElementById("rp_container-" + iteration).appendChild(rp_anchor);
               
                                          var rp_anchor_img = document.createElement("a");
              rp_anchor_img.setAttribute("id", "rp-anchor-img" + iteration), rp_anchor_img.setAttribute("href", post_urls[random_entry]), document.getElementById("rp_container-" + iteration).appendChild(rp_anchor_img);


              var pin = String(post_thumbnail_url[random_entry].match(/\/s72-c\//));
                        post_thumbnail_url[random_entry] = replaceAll(post_thumbnail_url[random_entry], pin, "/w" + post_thumbnail_width + "-h" + post_thumbnail_height + "-p/" + "-rw");
post_thumbnail_url[random_entry] = post_thumbnail_url[random_entry].replace(/png/gim,"webp");
post_thumbnail_url[random_entry] = post_thumbnail_url[random_entry].replace(/jpeg/gim,"webp");
post_thumbnail_url[random_entry] = post_thumbnail_url[random_entry].replace(/jpg/gim,"webp");
console.log(post_thumbnail_url[random_entry]);

                                          var rp_anchor_img_tag = document.createElement("img");
 rp_anchor_img_tag.setAttribute("src", post_thumbnail_url[random_entry]),rp_anchor_img_tag.setAttribute("loading", "lazy"),rp_anchor_img_tag.setAttribute("alt", post_titles[random_entry]),rp_anchor_img_tag.setAttribute("class", "featured-item-image"), rp_anchor_img_tag.setAttribute("width", post_thumbnail_width), rp_anchor_img_tag.setAttribute("height", post_thumbnail_height), document.getElementById("rp-anchor-img" + iteration).appendChild(rp_anchor_img_tag);
// rp_anchor_img_tag.style.minHeight = post_thumbnail_height + "px";

console.log(post_thumbnail_url[random_entry]) ; 
console.log(pin) ; 


               var rp_tag = document.createElement("span");
                          rp_tag.setAttribute("id", "rp-tag-" + iteration), rp_tag.setAttribute("class", "rp-tag"), document.getElementById("rp_container-" + iteration).appendChild(rp_tag);
                var text_tag = document.createTextNode(post_tags[random_entry]);
               document.getElementById("rp-tag-" + iteration).appendChild(text_tag);
               
               
                   var rp_para = document.createElement("p");
                           rp_para.setAttribute("id", "rp-para-" + iteration);
                           var textnode = document.createTextNode(post_titles[random_entry]);
                           rp_para.appendChild(textnode), document.getElementById("rp-anchor-" + iteration).appendChild(rp_para) ;
               
               
               var rp_meta = document.createElement("p");
                rp_meta.setAttribute("class", "rp-meta"),  rp_meta.setAttribute("id", "rp-meta-" + iteration), document.getElementById("rp-anchor-" + iteration).appendChild(rp_meta);
               
               var rp_authorImage = document.createElement("img");
                  


         var head = document.getElementsByTagName('head').item(0);
    var script = document.createElement('link');
    script.setAttribute('rel', 'preload');
    script.setAttribute('as', 'image');
                        
    script.setAttribute('href', author_image[random_entry]  );
    head.appendChild(script);
         
                  rp_authorImage.setAttribute("src", author_image[random_entry] ) ,rp_authorImage.setAttribute("loading", "lazy"), rp_authorImage.setAttribute("alt", post_authors[random_entry] ) ,rp_authorImage.setAttribute("id", "rp-authorimage-" + iteration) , document.getElementById("rp-meta-" + iteration).appendChild(rp_authorImage),rp_authorImage.setAttribute("width","50px" ),rp_authorImage.setAttribute("height","50px" ) ; 
               
               var rp_author = document.createElement("span");
                          rp_author.setAttribute("id", "rp-author-" + iteration), rp_author.setAttribute("class", "rp-author"), document.getElementById("rp-meta-" + iteration).appendChild(rp_author);
                var text_author = document.createTextNode(post_authors[random_entry]);
               document.getElementById("rp-author-" + iteration).appendChild(text_author);
               var rp_comments = document.createElement("span");
                          rp_comments.setAttribute("id", "rp-comments-" + iteration), rp_comments.setAttribute("class", "rp-comments"), document.getElementById("rp-meta-" + iteration).appendChild(rp_comments);

 document.getElementById( "rp-comments-" + iteration).innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" width="512" height="512" x="0" y="0" viewBox="0 0 511.626 511.626" style="enable-background:new 0 0 512 512" xml:space="preserve" class="">

		<path d="M301.927,327.605c30.926-13.038,55.34-30.785,73.23-53.248c17.888-22.458,26.833-46.915,26.833-73.372    c0-26.458-8.945-50.917-26.84-73.376c-17.888-22.459-42.298-40.208-73.228-53.249c-30.93-13.039-64.571-19.556-100.928-19.556    c-36.354,0-69.995,6.521-100.927,19.556c-30.929,13.04-55.34,30.789-73.229,53.249C8.947,150.072,0,174.527,0,200.986    c0,22.648,6.767,43.975,20.28,63.96c13.512,19.981,32.071,36.829,55.671,50.531c-1.902,4.572-3.853,8.754-5.852,12.566    c-2,3.806-4.377,7.467-7.139,10.991c-2.76,3.525-4.899,6.283-6.423,8.275c-1.523,1.998-3.997,4.812-7.425,8.422    c-3.427,3.617-5.617,5.996-6.567,7.135c0-0.191-0.381,0.24-1.143,1.287c-0.763,1.047-1.191,1.52-1.285,1.431    c-0.096-0.103-0.477,0.373-1.143,1.42c-0.666,1.048-1,1.571-1,1.571l-0.715,1.423c-0.282,0.575-0.476,1.137-0.57,1.712    c-0.096,0.567-0.144,1.19-0.144,1.854s0.094,1.28,0.288,1.854c0.381,2.471,1.475,4.466,3.283,5.996    c1.807,1.52,3.756,2.279,5.852,2.279h0.857c9.515-1.332,17.701-2.854,24.552-4.569c29.312-7.61,55.771-19.797,79.372-36.545    c17.129,3.046,33.879,4.568,50.247,4.568C237.353,347.16,270.998,340.645,301.927,327.605z" fill="#6a6a6a" data-original="#000000" style=""/>
		<path d="M491.354,338.166c13.518-19.889,20.272-41.247,20.272-64.09c0-23.414-7.146-45.316-21.416-65.68    c-14.277-20.362-33.694-37.305-58.245-50.819c4.374,14.274,6.563,28.739,6.563,43.398c0,25.503-6.368,49.676-19.129,72.519    c-12.752,22.836-31.025,43.01-54.816,60.524c-22.08,15.988-47.205,28.261-75.377,36.829    c-28.164,8.562-57.573,12.848-88.218,12.848c-5.708,0-14.084-0.377-25.122-1.137c38.256,25.119,83.177,37.685,134.756,37.685    c16.371,0,33.119-1.526,50.251-4.571c23.6,16.755,50.06,28.931,79.37,36.549c6.852,1.718,15.037,3.237,24.554,4.568    c2.283,0.191,4.381-0.476,6.283-1.999c1.903-1.522,3.142-3.61,3.71-6.272c-0.089-1.143,0-1.77,0.287-1.861    c0.281-0.09,0.233-0.712-0.144-1.852c-0.376-1.144-0.568-1.715-0.568-1.715l-0.712-1.424c-0.198-0.376-0.52-0.903-0.999-1.567    c-0.476-0.66-0.855-1.143-1.143-1.427c-0.28-0.284-0.705-0.763-1.28-1.424c-0.568-0.66-0.951-1.092-1.143-1.283    c-0.951-1.143-3.139-3.521-6.564-7.139c-3.429-3.613-5.899-6.42-7.422-8.418c-1.523-1.999-3.665-4.757-6.424-8.282    c-2.758-3.518-5.14-7.183-7.139-10.991c-1.998-3.806-3.949-7.995-5.852-12.56C459.289,374.859,477.843,358.062,491.354,338.166z" fill="#6a6a6a" data-original="#000000" style=""/>
</svg>
`;
var text_comments = document.createTextNode(post_comments[random_entry]);
               document.getElementById("rp-comments-" + iteration).appendChild(text_comments);
                        iteration++, random_entry < post_titles.length - 1 ? random_entry++ : random_entry = 0
                      
               
               } else iteration++, random_entry < post_titles.length - 1 ? random_entry++ : random_entry = 0;
                   post_urls.splice(0, post_urls.length), post_thumbnail_url.splice(0, post_thumbnail_url.length), post_titles.splice(0, post_titles.length)
              





// read also 



              if (pageType == "item" &&   document.getElementById("post-body").childNodes.length > 6 ) { 


               var post_thumbnail_width = 150;
               var post_thumbnail_height = 150 ;
 

               

               var max_related_entries;
               function escapeRegExp(string) {
                   return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
               }
               
               function replaceAll(str, term, replacement) {
                   return str.replace(new RegExp(escapeRegExp(term), "g"), replacement)
               }


var containerDiv 


var readalso =   document.getElementById("post-body").childNodes[4] ; 
              max_related_entries = 2;



 containerDiv = document.createElement('div');      
       
 readalso.appendChild(containerDiv); 

     containerDiv.setAttribute("class" , "read-also"); 

console.log(data); 
                   for ( post_titles = new Array, post_comments = new Array, author_image= new Array, post_summary = new Array, post_time = new Array, post_authors= new Array, post_tags = new Array, post_num = 0, post_urls = new Array, post_thumbnail_url = new Array, i = 3; i < data.feed.entry.length; i++) {
                       var feed_entry = data.feed.entry[i];
                       post_titles[post_num] = feed_entry.title.$t;
                               post_tags[post_num] = feed_entry.category[0].term;
                               post_authors[post_num] = feed_entry.author[0].name.$t;
                                               post_time[post_num] = feed_entry.published.$t;
                                            //   post_summary[post_num] = feed_entry.summary.$t;
                                               post_comments[post_num] = feed_entry.thr$total.$t;
                                author_image[post_num] = feed_entry.author[0].gd$image.src	;
                    console.log(post_tags[post_num]) ;
                          
                       try {
                           post_thumbnail_url[post_num] = feed_entry.media$thumbnail.url
                       } catch (error) {
                           s = feed_entry.content.$t, a = s.indexOf("<img"), b = s.indexOf('src="', a), c = s.indexOf('"', b + 5), d = s.substr(b + 5, c - b - 5), -1 != a && -1 != b && -1 != c && "" != d ? post_thumbnail_url[post_num] = d : "undefined" != typeof defaultnoimage ? post_thumbnail_url[post_num] = defaultnoimage : post_thumbnail_url[post_num] = "https://i.ibb.co/yS6JvBh/no-image.jpg"
                       }
                       for (var k = 0; k < feed_entry.link.length; k++) "alternate" == feed_entry.link[k].rel && (post_urls[post_num] = feed_entry.link[k].href, post_num++)
                   }
                   
                   var random_entry = Math.floor((post_titles.length - 1) * Math.random()),
                       iteration = 0;
                  
                   for (; iteration < post_titles.length && 20 > iteration && max_related_entries > iteration;)
               
                       if (post_urls[random_entry] != currentURL) {
               
                var ra_container = document.createElement("div");
               
                      ra_container.setAttribute("id", "ra_container-" + iteration ),ra_container.setAttribute("class", "ra-div"),containerDiv.appendChild(ra_container); 

               
                     
                                          var ra_anchor_img = document.createElement("a");
              ra_anchor_img.setAttribute("id", "ra-anchor-img" + iteration), ra_anchor_img.setAttribute("href", post_urls[random_entry]), document.getElementById("ra_container-" + iteration).appendChild(ra_anchor_img);


      var ra_anchor = document.createElement("a");
                          ra_anchor.setAttribute("id", "ra-anchor-" + iteration), ra_anchor.setAttribute("href", post_urls[random_entry]), ra_anchor.setAttribute("class", "featured-item-data"), document.getElementById("ra_container-" + iteration).appendChild(ra_anchor);
               

              var pin = String(post_thumbnail_url[random_entry].match(/\/s72-c\//));
                        post_thumbnail_url[random_entry] = replaceAll(post_thumbnail_url[random_entry], pin, "/w" + post_thumbnail_width + "-h" + post_thumbnail_height + "-p/" + "-rw");
post_thumbnail_url[random_entry] = post_thumbnail_url[random_entry].replace(/png/gim,"webp");
post_thumbnail_url[random_entry] = post_thumbnail_url[random_entry].replace(/jpeg/gim,"webp");
post_thumbnail_url[random_entry] = post_thumbnail_url[random_entry].replace(/jpg/gim,"webp");
console.log(post_thumbnail_url[random_entry]);

                                          var ra_anchor_img_tag = document.createElement("img");
 ra_anchor_img_tag.setAttribute("src", post_thumbnail_url[random_entry]),ra_anchor_img_tag.setAttribute("loading", "lazy"),ra_anchor_img_tag.setAttribute("alt", post_titles[random_entry]),ra_anchor_img_tag.setAttribute("class", "featured-item-image"), ra_anchor_img_tag.setAttribute("width", post_thumbnail_width), ra_anchor_img_tag.setAttribute("height", post_thumbnail_height), document.getElementById("ra-anchor-img" + iteration).appendChild(ra_anchor_img_tag);
// ra_anchor_img_tag.style.minHeight = post_thumbnail_height + "px";

console.log(post_thumbnail_url[random_entry]) ; 
console.log(pin) ; 


               
               
                   var ra_para = document.createElement("p");
                           ra_para.setAttribute("id", "ra-para-" + iteration);
                           var textnode = document.createTextNode(post_titles[random_entry]);
                           ra_para.appendChild(textnode), document.getElementById("ra-anchor-" + iteration).appendChild(ra_para) ;
               
                              var ra_tag = document.createElement("span");
                          ra_tag.setAttribute("id", "ra-tag-" + iteration), ra_tag.setAttribute("class", "ra-tag"), document.getElementById( "ra-para-" + iteration).appendChild(ra_tag);
                var text_tag = document.createTextNode(post_tags[random_entry]);
               document.getElementById("ra-tag-" + iteration).appendChild(text_tag);

               
               var ra_meta = document.createElement("p");
                ra_meta.setAttribute("class", "ra-meta"),  ra_meta.setAttribute("id", "ra-meta-" + iteration), document.getElementById("ra-anchor-" + iteration).appendChild(ra_meta);
               
               var ra_authorImage = document.createElement("img");
                  
         
                  ra_authorImage.setAttribute("src", author_image[random_entry] ) ,ra_authorImage.setAttribute("loading", "lazy"), ra_authorImage.setAttribute("alt", post_authors[random_entry] ) ,ra_authorImage.setAttribute("id", "ra-authorimage-" + iteration) , document.getElementById("ra-meta-" + iteration).appendChild(ra_authorImage),ra_authorImage.setAttribute("width","50px" ),ra_authorImage.setAttribute("height","50px" ) ; 
               
               var ra_author = document.createElement("span");
                          ra_author.setAttribute("id", "ra-author-" + iteration), ra_author.setAttribute("class", "ra-author"), document.getElementById("ra-meta-" + iteration).appendChild(ra_author);
                var text_author = document.createTextNode(post_authors[random_entry]);
               document.getElementById("ra-author-" + iteration).appendChild(text_author);
               
               
                        iteration++, random_entry < post_titles.length - 1 ? random_entry++ : random_entry = 0
                      
               
               } else iteration++, random_entry < post_titles.length - 1 ? random_entry++ : random_entry = 0;
                   post_urls.splice(0, post_urls.length), post_thumbnail_url.splice(0, post_thumbnail_url.length), post_titles.splice(0, post_titles.length)
                   
                   
                   
              } 
              


// end read also

} else {

    alert('Something went wrong: ' + err);

  }


            });
	

    });
}) ();
}

 // End related posts 





// slider posts 






               if ( window.location.href == homePage || window.location.href == homePage + "?m=1" ) {


(function sliderP(){
    return new Promise((resolve,reject)=>{

       var fetchSliderURL = homePage  + "feeds/posts/default/?alt=json-in-script&max-results=100"; 
console.log(fetchSliderURL);


var getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'jsonp';
    xhr.onload = function() {
      var status = xhr.status;
      if (status === 200) {
        callback(null, xhr.response);
      } else {
        callback(status, xhr.response);
      }
    };
    xhr.send();
};



getJSON(fetchSliderURL,
function(err, data) {
  if (err === null) {
  

  if (screen.width < 485) {

             var post_slider_width = screen.width ;
              var post_slider_height = 300 ;
 
} 
else if (screen.width < 978 && screen.width > 485  ) {
               var post_slider_width = screen.width/3 ;
               var post_slider_height = 400;
               
               }
 else {
               
               var post_slider_width = 1100/4 - 40;
           var post_slider_height = 600;
               
               }
               

               var max_entries;

               function escapeRegExp(string) {
                   return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
               }
               
               function replaceAll(str, term, replacement) {
                   return str.replace(new RegExp(escapeRegExp(term), "g"), replacement)
               }



             
containerDiv = "slider-above" ;
             max_entries = 5;

console.log(containerDiv);  
                   console.log(data); 
console.log(typeof(data));

 data = data.replace('gdata.io.handleScriptLoaded(','');

data = data.substring(0, data.length-2);

 data = JSON.parse(data);
                   console.log(data + "nn"); 
console.log(typeof(data)  + "nn");


                   for ( post_titles = new Array, post_comments = new Array, author_image= new Array, post_summary = new Array, post_time = new Array, post_authors= new Array, post_tags = new Array, post_num = 0, post_urls = new Array, post_slider_url = new Array, i = 0; i < data.feed.entry.length; i++) {
                       var feed_entry = data.feed.entry[i];
                       post_titles[post_num] = feed_entry.title.$t;
                               post_tags[post_num] = feed_entry.category[0].term;
                               post_authors[post_num] = feed_entry.author[0].name.$t;
                                               post_time[post_num] = feed_entry.published.$t;
                                            //   post_summary[post_num] = feed_entry.summary.$t;
                                               post_comments[post_num] = feed_entry.thr$total.$t;
                                author_image[post_num] = feed_entry.author[0].gd$image.src	;
                    console.log(post_tags[post_num]) ;
                          
                       try {
                           post_slider_url[post_num] = feed_entry.media$slider.url
                       } catch (error) {
                           s = feed_entry.content.$t, a = s.indexOf("<img"), b = s.indexOf('src="', a), c = s.indexOf('"', b + 5), d = s.substr(b + 5, c - b - 5), -1 != a && -1 != b && -1 != c && "" != d ? post_slider_url[post_num] = d : "undefined" != typeof defaultnoimage ? post_slider_url[post_num] = defaultnoimage : post_slider_url[post_num] = "https://i.ibb.co/yS6JvBh/no-image.jpg"
                       }
               
                       for (var k = 0; k < feed_entry.link.length; k++) "alternate" == feed_entry.link[k].rel && (post_urls[post_num] = feed_entry.link[k].href, post_num++)
                   }
                   
                   var random_entry = Math.floor((post_titles.length - 1) * Math.random()),
                       iteration = 0;
                 

               
                   for (; iteration < post_titles.length && 20 > iteration && max_entries > iteration;)
               
                       if (post_urls[random_entry] != currentURL) {
               
                var lp_container = document.createElement("div");
               
                       lp_container.setAttribute("style", "clear: both;"), lp_container.setAttribute("id", "lp_container-" + iteration ),lp_container.setAttribute("class", "lp-div"),document.getElementById(containerDiv).appendChild(lp_container); 

               
                           var lp_anchor = document.createElement("a");
                          lp_anchor.setAttribute("id", "lp-anchor-" + iteration), lp_anchor.setAttribute("href", post_urls[random_entry]), lp_anchor.setAttribute("class", "featured-item-data"), document.getElementById("lp_container-" + iteration).appendChild(lp_anchor);
               
                                          var lp_anchor_img = document.createElement("a");
              lp_anchor_img.setAttribute("id", "lp-anchor-img" + iteration), lp_anchor_img.setAttribute("href", post_urls[random_entry]), document.getElementById("lp_container-" + iteration).appendChild(lp_anchor_img);


              var pin = String(post_slider_url[random_entry].match(/\/s72-c\//));
                        post_slider_url[random_entry] = replaceAll(post_slider_url[random_entry], pin, "/w" + post_slider_width + "-h" + post_slider_height + "-p/" + "-rw");
post_slider_url[random_entry] = post_slider_url[random_entry].replace(/png/gim,"webp");
post_slider_url[random_entry] = post_slider_url[random_entry].replace(/jpeg/gim,"webp");
post_slider_url[random_entry] = post_slider_url[random_entry].replace(/jpg/gim,"webp");
console.log(post_slider_url[random_entry]);

                                          var lp_anchor_img_tag = document.createElement("img");
 lp_anchor_img_tag.setAttribute("src", post_slider_url[random_entry]),lp_anchor_img_tag.setAttribute("alt", post_titles[random_entry]),lp_anchor_img_tag.setAttribute("loading", "lazy"), lp_anchor_img_tag.setAttribute("class", "featured-item-image"), lp_anchor_img_tag.setAttribute("width", post_slider_width), lp_anchor_img_tag.setAttribute("height", post_slider_height), document.getElementById("lp-anchor-img" + iteration).appendChild(lp_anchor_img_tag);
// lp_anchor_img_tag.style.minHeight = post_slider_height + "px";

console.log(post_slider_url[random_entry]) ; 
console.log(pin) ; 


        var lp_tag = document.createElement("span");
                          lp_tag.setAttribute("id", "lp-tag-" + iteration), lp_tag.setAttribute("class", "lp-tag"), document.getElementById("lp-anchor-" + iteration).appendChild(lp_tag);
                var text_tag = document.createTextNode(post_tags[random_entry]);
               document.getElementById("lp-tag-" + iteration).appendChild(text_tag);
               
                   var lp_para = document.createElement("p");
                           lp_para.setAttribute("id", "lp-para-" + iteration);
                           var textnode = document.createTextNode(post_titles[random_entry]);
                           lp_para.appendChild(textnode), document.getElementById("lp-anchor-" + iteration).appendChild(lp_para) ;
               

               var lp_meta = document.createElement("p");
                lp_meta.setAttribute("class", "lp-meta"),  lp_meta.setAttribute("id", "lp-meta-" + iteration), document.getElementById("lp-anchor-" + iteration).appendChild(lp_meta);
               
               var lp_authorImage = document.createElement("img");
               
                  lp_authorImage.setAttribute("loading", "lazy"),lp_authorImage.setAttribute("src", author_image[random_entry] ) , lp_authorImage.setAttribute("alt", post_authors[random_entry] ), lp_authorImage.setAttribute("id", "lp-authorimage-" + iteration) , document.getElementById("lp-meta-" + iteration).appendChild(lp_authorImage),lp_authorImage.setAttribute("width","50px" ),lp_authorImage.setAttribute("height","50px" ) ; 
               
               var lp_author = document.createElement("span");
                          lp_author.setAttribute("id", "lp-author-" + iteration), lp_author.setAttribute("class", "lp-author"), document.getElementById("lp-meta-" + iteration).appendChild(lp_author);
                var text_author = document.createTextNode(post_authors[random_entry]);
               document.getElementById("lp-author-" + iteration).appendChild(text_author);
         
               var lp_comments = document.createElement("span");
                          lp_comments.setAttribute("id", "lp-comments-" + iteration), lp_comments.setAttribute("class", "lp-comments"), document.getElementById("lp-meta-" + iteration).appendChild(lp_comments);
                

 document.getElementById( "lp-comments-" + iteration).innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" id="Capa_1" enable-background="new 0 0 511.072 511.072" height="512" viewBox="0 0 511.072 511.072" width="512" style="&#10;"><g id="Speech_Bubble_48_"><g><path d="m74.39 480.536h-36.213l25.607-25.607c13.807-13.807 22.429-31.765 24.747-51.246-36.029-23.644-62.375-54.751-76.478-90.425-14.093-35.647-15.864-74.888-5.121-113.482 12.89-46.309 43.123-88.518 85.128-118.853 45.646-32.963 102.47-50.387 164.33-50.387 77.927 0 143.611 22.389 189.948 64.745 41.744 38.159 64.734 89.63 64.734 144.933 0 26.868-5.471 53.011-16.26 77.703-11.165 25.551-27.514 48.302-48.593 67.619-46.399 42.523-112.042 65-189.83 65-28.877 0-59.01-3.855-85.913-10.929-25.465 26.123-59.972 40.929-96.086 40.929zm182-420c-124.039 0-200.15 73.973-220.557 147.285-19.284 69.28 9.143 134.743 76.043 175.115l7.475 4.511-.23 8.727c-.456 17.274-4.574 33.912-11.945 48.952 17.949-6.073 34.236-17.083 46.99-32.151l6.342-7.493 9.405 2.813c26.393 7.894 57.104 12.241 86.477 12.241 154.372 0 224.682-93.473 224.682-180.322 0-46.776-19.524-90.384-54.976-122.79-40.713-37.216-99.397-56.888-169.706-56.888z"/></g></g></svg>
`;

var text_comments = document.createTextNode(post_comments[random_entry]);
               document.getElementById("lp-comments-" + iteration).appendChild(text_comments);
               
               
                        iteration++, random_entry < post_titles.length - 1 ? random_entry++ : random_entry = 0
                      
               
               } else iteration++, random_entry < post_titles.length - 1 ? random_entry++ : random_entry = 0;
                   post_urls.splice(0, post_urls.length), post_slider_url.splice(0, post_slider_url.length), post_titles.splice(0, post_titles.length)
              


} else {

    alert('Something went wrong: ' + err);

  }



});


    });
}) ();
}

// end slider 


// featured above 


               if ( pageType == "item" ||  window.location.href == homePage || window.location.href == homePage + "?m=1" ) {


(function featuredAboveP(){
    return new Promise((resolve,reject)=>{

                    
       var fetchfeaturedAbovePURL = homePage  +"/feeds/posts/default/-/" + myLabelName_3 + "?alt=json-in-script&max-results=100"; 

console.log(fetchfeaturedAbovePURL);


var getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'jsonp';
    xhr.onload = function() {
      var status = xhr.status;
      if (status === 200) {
        callback(null, xhr.response);
      } else {
        callback(status, xhr.response);
      }
    };
    xhr.send();
};



getJSON(fetchfeaturedAbovePURL,
function(err, data) {
  if (err === null) {
  
                   console.log(data); 
console.log(typeof(data));

 data = data.replace('gdata.io.handleScriptLoaded(','');

data = data.substring(0, data.length-2);

 data = JSON.parse(data);
                   console.log(data + "nn"); 
console.log(typeof(data)  + "nn");




  if (screen.width < 485) {

             var post_slider_width = 300 ;
              var post_slider_height = 300 ;
 
} 
else if (screen.width < 978 && screen.width > 485  ) {
               var post_slider_width = 350 ;
               var post_slider_height = 350;
               
               }
 else {
               
               var post_slider_width = 350;
           var post_slider_height = 350;
               
               }
               

               var max_entries;

               function escapeRegExp(string) {
                   return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
               }
               
               function replaceAll(str, term, replacement) {
                   return str.replace(new RegExp(escapeRegExp(term), "g"), replacement)
               }


               if ( pageType == "item" ) {

             
containerDiv = "featured-sidebar" ;
             max_entries = 5;
}
else {

containerDiv = "featured-above" ;
             max_entries = 5;

} 
console.log(containerDiv);  


                   console.log(data); 
                   for ( post_titles = new Array, post_comments = new Array, author_image= new Array, post_summary = new Array, post_time = new Array, post_authors= new Array, post_tags = new Array, post_num = 0, post_urls = new Array, post_slider_url = new Array, i = 0; i < data.feed.entry.length; i++) {
                       var feed_entry = data.feed.entry[i];
                       post_titles[post_num] = feed_entry.title.$t;
                               post_tags[post_num] = feed_entry.category[0].term;
                               post_authors[post_num] = feed_entry.author[0].name.$t;
                                               post_time[post_num] = feed_entry.published.$t;
                                            //   post_summary[post_num] = feed_entry.summary.$t;
                                               post_comments[post_num] = feed_entry.thr$total.$t;
                                author_image[post_num] = feed_entry.author[0].gd$image.src	;
                    console.log(post_tags[post_num]) ;
                          
                       try {
                           post_slider_url[post_num] = feed_entry.media$slider.url
                       } catch (error) {
                           s = feed_entry.content.$t, a = s.indexOf("<img"), b = s.indexOf('src="', a), c = s.indexOf('"', b + 5), d = s.substr(b + 5, c - b - 5), -1 != a && -1 != b && -1 != c && "" != d ? post_slider_url[post_num] = d : "undefined" != typeof defaultnoimage ? post_slider_url[post_num] = defaultnoimage : post_slider_url[post_num] = "https://i.ibb.co/yS6JvBh/no-image.jpg"
                       }
               
                       for (var k = 0; k < feed_entry.link.length; k++) "alternate" == feed_entry.link[k].rel && (post_urls[post_num] = feed_entry.link[k].href, post_num++)
                   }
                   
                   var random_entry = Math.floor((post_titles.length - 1) * Math.random()),
                       iteration = 0;
                 

               
                   for (; iteration < post_titles.length && 20 > iteration && max_entries > iteration;)
               
                       if (post_urls[random_entry] != currentURL) {
               
                var featured_container = document.createElement("div");
               
                       featured_container.setAttribute("style", "clear: both;"), featured_container.setAttribute("id", "featured_container-" + iteration ),featured_container.setAttribute("class", "featured-div"),document.getElementById(containerDiv).appendChild(featured_container); 

                var featured_anchor_img = document.createElement("a");
              featured_anchor_img.setAttribute("id", "featured-anchor-img" + iteration), featured_anchor_img.setAttribute("href", post_urls[random_entry]), document.getElementById("featured_container-" + iteration).appendChild(featured_anchor_img);


              var pin = String(post_slider_url[random_entry].match(/\/s72-c\//));
                        post_slider_url[random_entry] = replaceAll(post_slider_url[random_entry], pin, "/w" + post_slider_width + "-h" + post_slider_height + "-p/" + "-rw");
post_slider_url[random_entry] = post_slider_url[random_entry].replace(/png/gim,"webp");
post_slider_url[random_entry] = post_slider_url[random_entry].replace(/jpeg/gim,"webp");
post_slider_url[random_entry] = post_slider_url[random_entry].replace(/jpg/gim,"webp");
console.log(post_slider_url[random_entry]);

                                          var featured_anchor_img_tag = document.createElement("img");
 featured_anchor_img_tag.setAttribute("loading", "lazy"),featured_anchor_img_tag.setAttribute("src", post_slider_url[random_entry]),featured_anchor_img_tag.setAttribute("alt", post_titles[random_entry]),featured_anchor_img_tag.setAttribute("class", "featured-item-image"), featured_anchor_img_tag.setAttribute("width", post_slider_width), featured_anchor_img_tag.setAttribute("height", post_slider_height), document.getElementById("featured-anchor-img" + iteration).appendChild(featured_anchor_img_tag);
// featured_anchor_img_tag.style.minHeight = post_slider_height + "px";

console.log(post_slider_url[random_entry]) ; 
console.log(pin) ; 



                           var featured_anchor = document.createElement("a");
                          featured_anchor.setAttribute("id", "featured-anchor-" + iteration), featured_anchor.setAttribute("href", post_urls[random_entry]), featured_anchor.setAttribute("class", "featured-item-data"), document.getElementById("featured_container-" + iteration).appendChild(featured_anchor);
               
                                         




               var featured_tag = document.createElement("span");
                          featured_tag.setAttribute("id", "featured-tag-" + iteration), featured_tag.setAttribute("class", "featured-tag"), document.getElementById("featured-anchor-" + iteration).appendChild(featured_tag);
                var text_tag = document.createTextNode(post_tags[random_entry]);
               document.getElementById("featured-tag-" + iteration).appendChild(text_tag);
               
               
                   var featured_para = document.createElement("p");
                           featured_para.setAttribute("id", "featured-para-" + iteration);
                           var textnode = document.createTextNode(post_titles[random_entry]);
                           featured_para.appendChild(textnode), document.getElementById("featured-anchor-" + iteration).appendChild(featured_para) ;
               
               
               var featured_meta = document.createElement("p");
                featured_meta.setAttribute("class", "featured-meta"),  featured_meta.setAttribute("id", "featured-meta-" + iteration), document.getElementById("featured-anchor-" + iteration).appendChild(featured_meta);
               
               var featured_authorImage = document.createElement("img");
               
                  featured_authorImage.setAttribute("loading", "lazy"),featured_authorImage.setAttribute("src", author_image[random_entry] ) ,featured_authorImage.setAttribute("alt", post_authors[random_entry] ) , featured_authorImage.setAttribute("id", "featured-authorimage-" + iteration) , document.getElementById("featured-meta-" + iteration).appendChild(featured_authorImage),featured_authorImage.setAttribute("width","50px" ),featured_authorImage.setAttribute("height","50px" ) ; 
               
               var featured_author = document.createElement("span");
                          featured_author.setAttribute("id", "featured-author-" + iteration), featured_author.setAttribute("class", "featured-author"), document.getElementById("featured-meta-" + iteration).appendChild(featured_author);
                var text_author = document.createTextNode(post_authors[random_entry]);
               document.getElementById("featured-author-" + iteration).appendChild(text_author);
         
               var featured_comments = document.createElement("span");
                          featured_comments.setAttribute("id", "featured-comments-" + iteration), featured_comments.setAttribute("class", "featured-comments"), document.getElementById("featured-meta-" + iteration).appendChild(featured_comments);
                

 document.getElementById( "featured-comments-" + iteration).innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" id="Capa_1" enable-background="new 0 0 511.072 511.072" height="512" viewBox="0 0 511.072 511.072" width="512" style="&#10;"><g id="Speech_Bubble_48_"><g><path d="m74.39 480.536h-36.213l25.607-25.607c13.807-13.807 22.429-31.765 24.747-51.246-36.029-23.644-62.375-54.751-76.478-90.425-14.093-35.647-15.864-74.888-5.121-113.482 12.89-46.309 43.123-88.518 85.128-118.853 45.646-32.963 102.47-50.387 164.33-50.387 77.927 0 143.611 22.389 189.948 64.745 41.744 38.159 64.734 89.63 64.734 144.933 0 26.868-5.471 53.011-16.26 77.703-11.165 25.551-27.514 48.302-48.593 67.619-46.399 42.523-112.042 65-189.83 65-28.877 0-59.01-3.855-85.913-10.929-25.465 26.123-59.972 40.929-96.086 40.929zm182-420c-124.039 0-200.15 73.973-220.557 147.285-19.284 69.28 9.143 134.743 76.043 175.115l7.475 4.511-.23 8.727c-.456 17.274-4.574 33.912-11.945 48.952 17.949-6.073 34.236-17.083 46.99-32.151l6.342-7.493 9.405 2.813c26.393 7.894 57.104 12.241 86.477 12.241 154.372 0 224.682-93.473 224.682-180.322 0-46.776-19.524-90.384-54.976-122.79-40.713-37.216-99.397-56.888-169.706-56.888z"/></g></g></svg>
`;

var text_comments = document.createTextNode(post_comments[random_entry]);
               document.getElementById("featured-comments-" + iteration).appendChild(text_comments);
               
               
                        iteration++, random_entry < post_titles.length - 1 ? random_entry++ : random_entry = 0
                      
               
               } else iteration++, random_entry < post_titles.length - 1 ? random_entry++ : random_entry = 0;
                   post_urls.splice(0, post_urls.length), post_slider_url.splice(0, post_slider_url.length), post_titles.splice(0, post_titles.length)
              

			
} else {

    alert('Something went wrong: ' + err);

  }
            });
	

    });
}) ();
}


// end featured above 


// featured down 



     if ( window.location.href == homePage || window.location.href == homePage + "?m=1" ) {


(function featuredDownP(){
    return new Promise((resolve,reject)=>{

                    
       var fetchfeaturedDownPURL = homePage  +"/feeds/posts/default/-/" + myLabelName_5 + "?alt=json-in-script&max-results=100"; 

console.log(fetchfeaturedDownPURL);
       
var getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'jsonp';
    xhr.onload = function() {
      var status = xhr.status;
      if (status === 200) {
        callback(null, xhr.response);
      } else {
        callback(status, xhr.response);
      }
    };
    xhr.send();
};



getJSON(fetchfeaturedDownPURL,
function(err, data) {
  if (err === null) {
  
                   console.log(data); 
console.log(typeof(data));

 data = data.replace('gdata.io.handleScriptLoaded(','');

data = data.substring(0, data.length-2);

 data = JSON.parse(data);
                   console.log(data + "nn"); 
console.log(typeof(data)  + "nn");





  if (screen.width < 485) {

             var post_slider_width = 300 ;
              var post_slider_height = 300 ;
 
} 
else if (screen.width < 978 && screen.width > 485  ) {
               var post_slider_width = 350 ;
               var post_slider_height = 350;
               
               }
 else {
               
               var post_slider_width = 350;
           var post_slider_height = 350;
               
               }
               

               var max_entries;

               function escapeRegExp(string) {
                   return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
               }
               
               function replaceAll(str, term, replacement) {
                   return str.replace(new RegExp(escapeRegExp(term), "g"), replacement)
               }


              

containerDiv = "featured-down" ;
             max_entries = 7 ;


console.log(containerDiv);  


                   console.log(data); 
                   for ( post_titles = new Array, post_comments = new Array, author_image= new Array, post_summary = new Array, post_time = new Array, post_authors= new Array, post_tags = new Array, post_num = 0, post_urls = new Array, post_slider_url = new Array, i = 0; i < data.feed.entry.length; i++) {
                       var feed_entry = data.feed.entry[i];
                       post_titles[post_num] = feed_entry.title.$t;
                               post_tags[post_num] = feed_entry.category[0].term;
                               post_authors[post_num] = feed_entry.author[0].name.$t;
                                               post_time[post_num] = feed_entry.published.$t;
                                            //   post_summary[post_num] = feed_entry.summary.$t;
                                               post_comments[post_num] = feed_entry.thr$total.$t;
                                author_image[post_num] = feed_entry.author[0].gd$image.src	;
                    console.log(post_tags[post_num]) ;
                          
                       try {
                           post_slider_url[post_num] = feed_entry.media$slider.url
                       } catch (error) {
                           s = feed_entry.content.$t, a = s.indexOf("<img"), b = s.indexOf('src="', a), c = s.indexOf('"', b + 5), d = s.substr(b + 5, c - b - 5), -1 != a && -1 != b && -1 != c && "" != d ? post_slider_url[post_num] = d : "undefined" != typeof defaultnoimage ? post_slider_url[post_num] = defaultnoimage : post_slider_url[post_num] = "https://i.ibb.co/yS6JvBh/no-image.jpg"
                       }
               
                       for (var k = 0; k < feed_entry.link.length; k++) "alternate" == feed_entry.link[k].rel && (post_urls[post_num] = feed_entry.link[k].href, post_num++)
                   }
                   
                   var random_entry = Math.floor((post_titles.length - 1) * Math.random()),
                       iteration = 0;
                 

               
                   for (; iteration < post_titles.length && 20 > iteration && max_entries > iteration;)
               
                       if (post_urls[random_entry] != currentURL) {
               
                var fdown_container = document.createElement("div");
               
                       fdown_container.setAttribute("style", "clear: both;"), fdown_container.setAttribute("id", "fdown_container-" + iteration ),fdown_container.setAttribute("class", "featured-div"),document.getElementById(containerDiv).appendChild(fdown_container); 

                var fdown_anchor_img = document.createElement("a");
              fdown_anchor_img.setAttribute("id", "fdown-anchor-img" + iteration), fdown_anchor_img.setAttribute("href", post_urls[random_entry]), document.getElementById("fdown_container-" + iteration).appendChild(fdown_anchor_img);


              var pin = String(post_slider_url[random_entry].match(/\/s72-c\//));
                        post_slider_url[random_entry] = replaceAll(post_slider_url[random_entry], pin, "/w" + post_slider_width + "-h" + post_slider_height + "-p/" + "-rw");
post_slider_url[random_entry] = post_slider_url[random_entry].replace(/png/gim,"webp");
post_slider_url[random_entry] = post_slider_url[random_entry].replace(/jpeg/gim,"webp");
post_slider_url[random_entry] = post_slider_url[random_entry].replace(/jpg/gim,"webp");
console.log(post_slider_url[random_entry]);

                                          var fdown_anchor_img_tag = document.createElement("img");
 fdown_anchor_img_tag.setAttribute("loading", "lazy"),fdown_anchor_img_tag.setAttribute("src", post_slider_url[random_entry]),fdown_anchor_img_tag.setAttribute("alt", post_titles[random_entry]),fdown_anchor_img_tag.setAttribute("class", "featured-item-image"), fdown_anchor_img_tag.setAttribute("width", post_slider_width), fdown_anchor_img_tag.setAttribute("height", post_slider_height), document.getElementById("fdown-anchor-img" + iteration).appendChild(fdown_anchor_img_tag);
// fdown_anchor_img_tag.style.minHeight = post_slider_height + "px";

console.log(post_slider_url[random_entry]) ; 
console.log(pin) ; 



                           var fdown_anchor = document.createElement("a");
                          fdown_anchor.setAttribute("id", "fdown-anchor-" + iteration), fdown_anchor.setAttribute("href", post_urls[random_entry]), fdown_anchor.setAttribute("class", "featured-item-data"), document.getElementById("fdown_container-" + iteration).appendChild(fdown_anchor);
               
                                         




               var fdown_tag = document.createElement("span");
                          fdown_tag.setAttribute("id", "fdown-tag-" + iteration), fdown_tag.setAttribute("class", "featured-tag"), document.getElementById("fdown-anchor-" + iteration).appendChild(fdown_tag);
                var text_tag = document.createTextNode(post_tags[random_entry]);
               document.getElementById("fdown-tag-" + iteration).appendChild(text_tag);
               
               
                   var fdown_para = document.createElement("p");
                           fdown_para.setAttribute("id", "fdown-para-" + iteration);
                           var textnode = document.createTextNode(post_titles[random_entry]);
                           fdown_para.appendChild(textnode), document.getElementById("fdown-anchor-" + iteration).appendChild(fdown_para) ;
               
               
               var fdown_meta = document.createElement("p");
                fdown_meta.setAttribute("class", "featured-meta"),  fdown_meta.setAttribute("id", "fdown-meta-" + iteration), document.getElementById("fdown-anchor-" + iteration).appendChild(fdown_meta);
               
               var fdown_authorImage = document.createElement("img");
               
                  fdown_authorImage.setAttribute("loading", "lazy"),fdown_authorImage.setAttribute("src", author_image[random_entry] ) ,fdown_authorImage.setAttribute("alt", post_authors[random_entry] ) , fdown_authorImage.setAttribute("id", "fdown-authorimage-" + iteration) , document.getElementById("fdown-meta-" + iteration).appendChild(fdown_authorImage),fdown_authorImage.setAttribute("width","50px" ),fdown_authorImage.setAttribute("height","50px" ) ; 
               
               var fdown_author = document.createElement("span");
                          fdown_author.setAttribute("id", "fdown-author-" + iteration), fdown_author.setAttribute("class", "featured-author"), document.getElementById("fdown-meta-" + iteration).appendChild(fdown_author);
                var text_author = document.createTextNode(post_authors[random_entry]);
               document.getElementById("fdown-author-" + iteration).appendChild(text_author);
         
               var fdown_comments = document.createElement("span");
                          fdown_comments.setAttribute("id", "fdown-comments-" + iteration), fdown_comments.setAttribute("class", "featured-comments"), document.getElementById("fdown-meta-" + iteration).appendChild(fdown_comments);
                

 document.getElementById( "fdown-comments-" + iteration).innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" id="Capa_1" enable-background="new 0 0 511.072 511.072" height="512" viewBox="0 0 511.072 511.072" width="512" style="&#10;"><g id="Speech_Bubble_48_"><g><path d="m74.39 480.536h-36.213l25.607-25.607c13.807-13.807 22.429-31.765 24.747-51.246-36.029-23.644-62.375-54.751-76.478-90.425-14.093-35.647-15.864-74.888-5.121-113.482 12.89-46.309 43.123-88.518 85.128-118.853 45.646-32.963 102.47-50.387 164.33-50.387 77.927 0 143.611 22.389 189.948 64.745 41.744 38.159 64.734 89.63 64.734 144.933 0 26.868-5.471 53.011-16.26 77.703-11.165 25.551-27.514 48.302-48.593 67.619-46.399 42.523-112.042 65-189.83 65-28.877 0-59.01-3.855-85.913-10.929-25.465 26.123-59.972 40.929-96.086 40.929zm182-420c-124.039 0-200.15 73.973-220.557 147.285-19.284 69.28 9.143 134.743 76.043 175.115l7.475 4.511-.23 8.727c-.456 17.274-4.574 33.912-11.945 48.952 17.949-6.073 34.236-17.083 46.99-32.151l6.342-7.493 9.405 2.813c26.393 7.894 57.104 12.241 86.477 12.241 154.372 0 224.682-93.473 224.682-180.322 0-46.776-19.524-90.384-54.976-122.79-40.713-37.216-99.397-56.888-169.706-56.888z"/></g></g></svg>
`;

var text_comments = document.createTextNode(post_comments[random_entry]);
               document.getElementById("fdown-comments-" + iteration).appendChild(text_comments);
               
               
                        iteration++, random_entry < post_titles.length - 1 ? random_entry++ : random_entry = 0
                      
               
               } else iteration++, random_entry < post_titles.length - 1 ? random_entry++ : random_entry = 0;
                   post_urls.splice(0, post_urls.length), post_slider_url.splice(0, post_slider_url.length), post_titles.splice(0, post_titles.length)
              







									} else {

    alert('Something went wrong: ' + err);

  }


            });
	

    });
}) ();
}




// end featured down 






// begin menu &amp; search functions 

   // <![CDATA[

if (pageType != "static_page") {
 var elmnt = document.getElementById("myMain");

       var sideAbove = document.getElementById("sidebar");

  var myHeight ;
if (pageType == "item") {
          myHeight = elmnt.offsetHeight - sideAbove.offsetHeight - 500 ;
         } 
else {
          myHeight =elmnt.offsetHeight - sideAbove.offsetHeight + 50 ;

}
         var cssProperty = myHeight + "px" ;
         console.log(cssProperty) ; 
          console.log(elmnt.offsetHeight) ;
         document.getElementById("mySidebar").style.minHeight = cssProperty; 
}
if (pageType == "item") {
        document.getElementById("ad-above").appendChild(document.getElementById("HTML10"));
                  document.getElementById("ad-below").appendChild(document.getElementById("HTML101"));
         }
          function openNav() {
            document.getElementById("mainmenu").style.width = "75%";           document.getElementById("mainmenu").style.transform = "translateX(0px)";
            document.getElementById("close-nav").style.display = "block";
            document.getElementById("close-nav").style.transform = " scale(2)";
          

            document.getElementById("open-nav").style.display = "none";
          }
          
          function closeNav() {
            document.getElementById("mainmenu").style.width = "0";
            document.getElementById("mainmenu").style.transform = "translateX(75px)";
            document.getElementById("open-nav").style.display = "block";
            document.getElementById("close-nav").style.display = "none";
          }
          function searchNav() {
            document.getElementById("search-area").style.height = "auto";
            document.getElementById("search-area").style.display = "block";
            document.getElementById("search-close").style.display = "block";
            document.getElementById("search-nav").style.display = "none";
          
          }
          
          function closeSearch() {
            document.getElementById("search-area").style.height = "0";
            document.getElementById("search-area").style.display = "none";
            document.getElementById("search-close").style.display = "none";
            document.getElementById("search-nav").style.display = "block";
          
          }
          function shareNav() {
            document.getElementById("share-area").style.height = "auto";
            document.getElementById("share-toggle").style.display = "none";
            document.getElementById("share-toggleClose").style.display = "block";
            document.getElementById("share-area").style.padding = "5px";
          
          }
          function shareClose() {
            document.getElementById("share-area").style.height = "0";
            document.getElementById("share-toggleClose").style.display = "none";
            document.getElementById("share-toggle").style.display = "block";
              document.getElementById("share-area").style.padding = "0";
          }
// end search and menu scripts 

         
 // Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 30;
var navbarHeight = document.getElementById("header-ups").offsetHeight; 

var body = document.body,
    html = document.documentElement;

var documentHeight = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );


window.onscroll = (function(event){
  didScroll = true;
});

setInterval(function() {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 50);

function hasScrolled() {
  var st = window.scrollY; 

  // Make sure they scroll more than delta
  if(Math.abs(lastScrollTop - st) <= delta)
  return;

  // If they scrolled down and are past the navbar, add class .nav-up.
  // This is necessary so you never see what is "behind" the navbar.

  if (st > lastScrollTop && st > navbarHeight) {
    // Scroll Down, hide nav
    document.getElementById("header-ups").classList.add('gescout-sticky');
document.getElementById("header-ups").classList.remove('gescout-show');
  } else {
    // Scroll Up, show nav
    if(st + window.innerHeight < documentHeight ) {

      document.getElementById("header-ups").classList.add('gescout-show');
    }
    // if scrolled up to the top again
    if(st <= navbarHeight) {
      document.getElementById("header-ups").classList.remove('gescout-sticky');
			document.getElementById("header-ups").classList.add('gescout-show');

    }


  }

  lastScrollTop = st;
}

      
function closePromotion(){
document.getElementById("template-promotion").style.transform="translateY(136px)";    

}

const toggleSwitch = document.querySelector('#header-ups input[type="checkbox"]');

if (localStorage.theme) {
  toggleSwitch.checked = localStorage.theme === "dark";
}

function switchTheme(e) {
  const theme = e.target.checked ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.theme = theme;
}

toggleSwitch.addEventListener("change", switchTheme);



console.log(document.lastModified);
  myLoader = document.getElementsByClassName("loader");
   
for (var i = 0 ; i < myLoader.length; i++) {
if ( myLoader !== null )

myLoader[i].style.display = "none" ;

}
               /*]]>*/

