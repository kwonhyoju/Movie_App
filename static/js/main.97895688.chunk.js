(this.webpackJsonpmovie_app=this.webpackJsonpmovie_app||[]).push([[0],{21:function(e,t,a){e.exports=a(47)},46:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(13),i=a.n(s),o=a(3),c=a.n(o),m=a(14),l=a(15),u=a(16),v=a(19),p=a(17),d=a(20),g=a(18),y=a.n(g),f=a(2),h=a.n(f);function E(e){var t=e.title,a=e.year,n=e.summary,s=e.poster,i=e.genres;return r.a.createElement("div",{className:"movie"},r.a.createElement("img",{src:s,title:t,alt:t}),r.a.createElement("div",{className:"about_movie"},r.a.createElement("h3",{className:"movie_title"},t),r.a.createElement("h4",{className:"movie_year"},a),r.a.createElement("ul",{className:"movie_genres"},i.map((function(e,t){return r.a.createElement("li",{key:t},e)}))),r.a.createElement("h5",{className:"movie_sumamry"},n.slice(0,180),"...")))}E.ProtoTypes={title:h.a.string.isRequired,year:h.a.number.isRequired,summary:h.a.string.isRequired,poster:h.a.string.isRequired,genres:h.a.arrayOf(h.a.string).isRequired};var b=E,_=(a(46),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(v.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={isLoading:!0,movies:[]},a.getMovies=Object(m.a)(c.a.mark((function e(){var t,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:t=e.sent,n=t.data.data.movies,a.setState({isLoading:!1,movies:n});case 5:case"end":return e.stop()}}),e)}))),a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movies;return r.a.createElement("div",{className:"container"},t?r.a.createElement("div",{className:"laodingWrap"},r.a.createElement("p",null,"Loading...")):r.a.createElement("div",{className:"movies"},a.map((function(e){return console.log(e),r.a.createElement(b,{key:e.id,title:e.title,year:e.year,summary:e.summary,poster:e.medium_cover_image,genres:e.genres})}))))}}]),t}(r.a.Component));i.a.render(r.a.createElement(_,null),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.97895688.chunk.js.map