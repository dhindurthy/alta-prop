(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,a,t){e.exports=t(36)},27:function(e,a,t){},28:function(e,a,t){},36:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(20),i=t.n(r),s=t(4),c=t(5),o=t(8),m=t(7),u=t(6),d=t(3),g=t(1),p=(t(27),t(28),function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).state={selectedOption:{},value:n.props.field.value,showAllOptions:!1},n._changeOption=n._changeOption.bind(Object(o.a)(n)),n._clickElement=n._clickElement.bind(Object(o.a)(n)),n._hoverElement=n._hoverElement.bind(Object(o.a)(n)),n._leaveElement=n._leaveElement.bind(Object(o.a)(n)),n}return Object(c.a)(t,[{key:"_changeOption",value:function(e){for(var a,t=this.props.field.options,n=0;n<t.length;n++)t[n].value===e.target.value&&(a=t[n]);a.type="select-option",this.setState(function(e){return{selectedOption:a}}),this.props.sendSelectedOption(a)}},{key:"_clickElement",value:function(){this.setState(function(e){return{showAllOptions:!0}})}},{key:"_hoverElement",value:function(){this.setState(function(e){return{showAllOptions:!0}})}},{key:"_leaveElement",value:function(){this.setState(function(e){return{showAllOptions:!1}})}},{key:"render",value:function(e){return l.a.createElement("div",{className:"select-component",onMouseEnter:this._hoverElement.bind(this),onMouseLeave:this._leaveElement.bind(this)},l.a.createElement(d.b,{onClick:this._clickElement.bind(this),tabIndex:"0",role:"menuitem",to:this.props.field.value},this.props.field.label),this.state.showAllOptions&&l.a.createElement("ul",{className:"menu-list"},this.props.field.options.map(function(e,a){return l.a.createElement("li",{key:e.label,value:e.value},l.a.createElement(d.b,{tabIndex:"0",role:"menuitem",to:e.value},e.label))})))}}]),t}(l.a.Component)),h=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).state={},n}return Object(c.a)(t,[{key:"render",value:function(e){return l.a.createElement("section",{className:"menu"},l.a.createElement("ul",{className:"menu-ul"},this.props.menuData.map(function(e,a){return l.a.createElement("li",{key:a},"dropdown"===e.type&&l.a.createElement(p,{field:e}),!e.type&&l.a.createElement(d.b,{tabIndex:"0",role:"menuitem",to:e.value},e.label))})))}}]),t}(l.a.Component);var E=function(e){return l.a.createElement("button",{className:"button-component",disabled:e.disabled,onClick:e.buttonClick},e.children)},v=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).buttonClick=function(e){var a=n.state.activeKey,t=n.props.sliders.length;"next"===e&&a<t-1?(n.setState({isPrevDisabled:!1,animationClass:"carousel-item-rtl"}),a+=1):"prev"===e&&a>0&&(n.setState({isNextDisabled:!1,animationClass:"carousel-item-ltr"}),a-=1),a!==t-1&&0!==a||("prev"===e&&n.setState({isPrevDisabled:!0,animationClass:"carousel-item-ltr"}),"next"===e&&n.setState({isNextDisabled:!0,animationClass:"carousel-item-rtl"})),n.setState({activeKey:a})},n.state={activeKey:0,isPrevDisabled:!0,isNextDisabled:!1,animationClass:"carousel-item-rtl"},n.buttonClick=n.buttonClick.bind(Object(o.a)(n)),n}return Object(c.a)(t,[{key:"componentDidUpdate",value:function(){var e=this.state.activeKey,a=this.props.sliders.length;e<a-1?setTimeout(function(){this.setState({activeKey:e+1,isPrevDisabled:!1})}.bind(this),3500):(e=0,setTimeout(function(){this.setState({activeKey:e,isPrevDisabled:!0})}.bind(this),5e3))}},{key:"render",value:function(e){var a=this;return l.a.createElement("section",null,l.a.createElement("section",{className:"carousel"},l.a.createElement("section",{className:"main"},l.a.createElement("ul",{className:"carousel-list",id:this.props.id},this.props.sliders&&this.props.sliders.map(function(e,t){return a.state.activeKey===t&&l.a.createElement("li",{key:t,className:a.state.animationClass},a.props.panelContent(e,t))})),this.props.showBanner&&l.a.createElement("article",null,l.a.createElement("hr",null),l.a.createElement("h3",{tabIndex:"0"},this.props.banner),l.a.createElement("hr",null)))),l.a.createElement("div",{role:"presentation",className:"slider-buttons"},l.a.createElement(E,{disabled:this.state.isPrevDisabled&&this.props.prevDisabled,buttonClick:this.buttonClick.bind(this,"prev")},this.props.leftButton),this.props.textBetweenButtons(this.state.activeKey),l.a.createElement(E,{disabled:this.state.isNextDisabled&&this.props.nextDisabled,buttonClick:this.buttonClick.bind(this,"next")},this.props.rightButton)))}}]),t}(l.a.Component),b=v;v.defaultProps={nextDisabled:!0,prevDisabled:!0};var f=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).state={articles:[]},n}return Object(c.a)(t,[{key:"componentDidMount",value:function(){this.setState({articles:[{name:"donkey"},{name:"buffalo"},{name:"pig"},{name:"cow"},{name:"sheep"}]})}},{key:"render",value:function(){return l.a.createElement("section",{className:"home-page"},l.a.createElement("section",{className:"body"},l.a.createElement(b,{leftButton:"<",rightButton:">",showBanner:!0,sliders:this.state.articles,textBetweenButtons:function(e){return l.a.createElement("span",null)},banner:"Proudly Serving Greater Chicago Since 2010",panelContent:function(e,a){return 0===a&&l.a.createElement("section",null,l.a.createElement("img",{width:"533",height:"400",src:"images/Snow_plow-matchedsize.png",alt:"snow-plough"}),l.a.createElement("img",{width:"533",height:"400",src:"images/winterixzed_matchedsize.png",alt:"winterized"}))||1===a&&l.a.createElement("section",null,l.a.createElement("img",{width:"533",height:"400",src:"images/trashout.jpg",alt:"trashout"}),l.a.createElement("img",{width:"533",height:"400",src:"images/maintenace_matchedsize.jpg",alt:"maintenance"}))||2===a&&l.a.createElement("section",null,l.a.createElement("img",{width:"533",height:"400",src:"images/boardup-side-houseCleanUp.jpg",alt:"boardup"}),l.a.createElement("img",{width:"533",height:"400",src:"images/flowerbed-matchedsize.jpg",alt:"flowerbed"}))||3===a&&l.a.createElement("section",null,l.a.createElement("img",{width:"533",height:"400",src:"images/septic-drain-sewer-drain-backups-1024x768-1.jpg",alt:"drain clean"}),l.a.createElement("img",{width:"533",height:"400",src:"images/powerwash_matchedsize.jpg",alt:"powerwash"}))||4===a&&l.a.createElement("section",{style:{backgroundColor:"white",display:"flex",alignItems:"flex-start",width:"min-content"},className:"picture-frame"},l.a.createElement("div",null,l.a.createElement("img",{src:"images/drilling-machine-guy-e1613935293115.jpg",alt:"somethign"})),l.a.createElement("div",null,l.a.createElement("img",{src:"images/trash-claean_matchedsize.jpg",alt:"somethign"})))}})),l.a.createElement("h2",{className:"h2-content",tabIndex:"0"},l.a.createElement("hr",null),"ALTA Property Services",l.a.createElement("hr",null)),l.a.createElement("section",{className:"articles-main"},l.a.createElement("article",{tabIndex:"0"},l.a.createElement("h3",null,"About Us"),"Alta is your top choice for all your commercial or residential property & preservation services. You can count on us!"),l.a.createElement("article",{tabIndex:"0"},l.a.createElement("h3",null,"Our Services"),"Alta Property Services is one of Chicago\u2019s fastest growing commercial and residential multi-service providers.",l.a.createElement("br",null),"Below are some services we provide.",l.a.createElement("br",null),"Landscaping, Snow Removal, Repairs and Rehab, Trash Out, Secured Services, Winterization"),l.a.createElement("article",{className:"home-page-images"},l.a.createElement("img",{width:"400",height:"153",src:"images/IICRC-Logo-Best-for-Digital.png",alt:"IIRC"}),l.a.createElement("img",{width:"245",height:"153",src:"images/EPA_Leadsafe_Logo.png",alt:"IIRC"}))))}}]),t}(l.a.Component);var w=function(e){var a=Object(g.e)(),t=function(e){return a.push(e)};return l.a.createElement("section",{className:"service-page"},l.a.createElement("section",{className:"service-section"},l.a.createElement("h2",{className:"service-heading"},"WE CAN PROVIDE ALL YOUR PROPERTY SERVICES"),l.a.createElement("p",{className:"service-description"},"Alta Property Services began with a small crew mowing lawns for REO and REI distressed properties. Soon our customers, appreciating our can-do attitude and attention to detail, asked us to take on larger jobs and to provide more services such as secured services, maintenance, landscaping, and remodeling. Today, after years of delivering quality property services to satisfied customers, Alta is now one of Chicago\u2019s fastest growing commercial and residential multi-service providers."),l.a.createElement("h2",{className:"service-heading"},"OUR SERVICES"),l.a.createElement("div",{className:"image-gallery"},l.a.createElement(d.a,{tabIndex:"0",role:"menuitem",to:"/repairsandrehab"},l.a.createElement("img",{className:"navigable-image",onClick:function(){return t("/repairsandrehab")},src:"images/Repairs-Rehabs.jpg",alt:""})),l.a.createElement(d.a,{tabIndex:"0",role:"menuitem",to:"/securedservices"},l.a.createElement("img",{className:"navigable-image",onClick:function(){return t("/securedservices")},src:"images/Secured.jpg",alt:""})),l.a.createElement(d.a,{tabIndex:"0",role:"menuitem",to:"/trashout"},l.a.createElement("img",{className:"navigable-image",onClick:function(){return t("/trashout")},src:"images/Trash-1.jpg",alt:""})),l.a.createElement(d.a,{tabIndex:"0",role:"menuitem",to:"/winterization"},l.a.createElement("img",{className:"navigable-image",onClick:function(){return t("/winterization")},src:"images/Winter.jpg",alt:""})),l.a.createElement(d.a,{tabIndex:"0",role:"menuitem",to:"/landscaping"},l.a.createElement("img",{className:"navigable-image",onClick:function(){return t("/landscaping")},src:"images/Land.jpg",alt:""})),l.a.createElement(d.a,{tabIndex:"0",role:"menuitem",to:"/snowremoval"},l.a.createElement("img",{className:"navigable-image",onClick:function(){return t("/snowremoval")},src:"images/Snow.jpg",alt:""})))))};var y=function(e){return l.a.createElement("section",{className:"service-page"},l.a.createElement("h2",{className:"service-heading"},"Snow Removal"),l.a.createElement("p",{className:"service-description"},"We know how snow can cripple a day\u2019s operation. Fast turnaround for your safety and convenience is always our goal."),l.a.createElement("ul",{className:"snow-removal-list"},l.a.createElement("li",null,"24/7 EMERGENCY SERVICE"),l.a.createElement("li",null,"Driveways, parking lots, service roads, & walkways"),l.a.createElement("li",null,"All property types"),l.a.createElement("li",null,"On-site based crew, if needed"),l.a.createElement("li",null,"Salting"),l.a.createElement("li",null,"Salt purchase option")),l.a.createElement("div",{className:"image-gallery"},l.a.createElement("img",{src:"images/8-2.jpg",alt:"",width:"250",height:"250"}),l.a.createElement("img",{src:"images/5-1.jpg",alt:"",width:"250",height:"250"}),l.a.createElement("img",{src:"images/4-3.jpg",alt:"",width:"250",height:"250"}),l.a.createElement("img",{src:"images/2-4.jpg",alt:"",width:"250",height:"250"}),l.a.createElement("img",{src:"images/3-3.jpg",alt:"",width:"250",height:"250"}),l.a.createElement("img",{src:"images/7-3.jpg",alt:"",width:"250",height:"250"}),l.a.createElement("img",{src:"images/6-2.jpg",alt:"",width:"250",height:"250"}),l.a.createElement("img",{src:"images/1-4.jpg",alt:"",width:"250",height:"250"})))};var N=function(e){return l.a.createElement("section",{className:"service-page"},l.a.createElement("section",{className:"service-section"},l.a.createElement("h2",{className:"service-heading"},"INTERIOR /EXTERIOR MAINTENANCE & REPAIR"),l.a.createElement("p",{className:"service-description"},"Our dedicated, trustworthy technicians have the skills and resources to provide maintenance and repairs services for both commercial and residential properties. Small repair, large project, or emergency\u2013we get the job done promptly and to your complete satisfaction."),l.a.createElement("ul",{className:"snow-removal-list"},l.a.createElement("li",null,"Bathrooms and Kitchens"),l.a.createElement("li",null,"Drywall installation or repair"),l.a.createElement("li",null,"Painting, Carpentry, Flooring"),l.a.createElement("li",null,"Replace or repair door and windows *Energy-efficient windows available"),l.a.createElement("li",null,"Roof repairs/new roofs"))),l.a.createElement("section",{className:"service-section"},l.a.createElement("h2",{className:"service-heading"},"COMPLETE REHABS"),l.a.createElement("p",{className:"service-description"},"Looking to upgrade your kitchen or bathroom, add an addition or accommodate a senior parent. Want to update your office space? We can do it all."),l.a.createElement("h3",{className:"service-subheading"},"Residential Services"),l.a.createElement("ul",{className:"snow-removal-list"},l.a.createElement("li",null,"Kitchens and Bathrooms"),l.a.createElement("li",null,"Attic and Basement conversions"),l.a.createElement("li",null,"Additions"),l.a.createElement("li",null,"Exterior Renovations"),l.a.createElement("li",null,"Senior or disability-friendly modifications and rehab."),l.a.createElement("li",null,"Outdoor rooms")),l.a.createElement("h3",{className:"service-subheading"},"Commercial Services"),l.a.createElement("ul",{className:"snow-removal-list"},l.a.createElement("li",null,"New or renovated office, shop, and retail space"),l.a.createElement("li",null,"Exterior building renovations"),l.a.createElement("li",null,"Interior improvements including Senior or Disability accommodations"))),l.a.createElement("div",{className:"image-gallery"},l.a.createElement("img",{src:"images/r1.jpg",alt:"",width:"800",height:"800"}),l.a.createElement("img",{src:"images/r2.jpg",alt:"",width:"800",height:"800"}),l.a.createElement("img",{src:"images/r3-360x360.jpg",alt:"",width:"800",height:"800"}),l.a.createElement("img",{src:"images/r4-360x360.jpg",alt:"",width:"800",height:"800"}),l.a.createElement("img",{src:"images/r5-768x768.jpg",alt:"",width:"800",height:"800"}),l.a.createElement("img",{src:"images/r6-768x768.jpg",alt:"",width:"800",height:"800"})))};var j=function(e){return l.a.createElement("section",{className:"service-page"},l.a.createElement("h2",{className:"service-heading"},"SECURED SERVICES"),l.a.createElement("p",{className:"service-description"},"We specialize in preservation services that professionally secure, rehabilitate, and maintain the condition and value of REO and REI properties. You and your neighbors will feel at ease knowing your property is secured from unwanted guests and trespassers."),l.a.createElement("ul",{className:"snow-removal-list"},l.a.createElement("li",null,"Door frame/lock security reinforcements"),l.a.createElement("li",null,"Fitted panels of your choice for windows and doors"),l.a.createElement("li",null,"Master/ re-key services"),l.a.createElement("li",null,"Outside security inspections"),l.a.createElement("li",null,"Real estate lock boxes installed"),l.a.createElement("li",null,"24/7 Emergency Service")),l.a.createElement("div",{className:"image-gallery"},l.a.createElement("img",{src:"images/1.jpg",alt:""}),l.a.createElement("img",{src:"images/3.jpg",alt:""}),l.a.createElement("img",{src:"images/7.jpg",alt:""}),l.a.createElement("img",{src:"images/6.jpg",alt:""}),l.a.createElement("img",{src:"images/2.jpg",alt:""}),l.a.createElement("img",{src:"images/8.jpg",alt:""})))};var S=function(e){return l.a.createElement("section",{className:"service-page"},l.a.createElement("h2",{className:"service-heading"},"TRASH OUT & CLEANING"),l.a.createElement("p",{className:"service-description"},"With our dumpsters, trucks, and cleaning resources we can make your property spotless within hours. Let us do the dirty work."),l.a.createElement("ul",{className:"snow-removal-list"},l.a.createElement("li",null,"Complete site demo and disposal"),l.a.createElement("li",null,"Eco friendly products used"),l.a.createElement("li",null,"Foreclosure clean-outs"),l.a.createElement("li",null,"Hazardous waste clean up"),l.a.createElement("li",null,"Maid service"),l.a.createElement("li",null,"Recycling"),l.a.createElement("li",null,"Power washing"),l.a.createElement("li",null,"Small to huge jobs")),l.a.createElement("div",{className:"image-gallery"},l.a.createElement("img",{src:"images/1-1.jpg",alt:""}),l.a.createElement("img",{src:"images/2-1.jpg",alt:""}),l.a.createElement("img",{src:"images/4.jpg",alt:""}),l.a.createElement("img",{src:"images/6-1.jpg",alt:""}),l.a.createElement("img",{src:"images/7-1.jpg",alt:""}),l.a.createElement("img",{src:"images/8-1.jpg",alt:""})))};var O=function(e){return l.a.createElement("section",{className:"service-page"},l.a.createElement("h2",{className:"service-heading"},"REMEDIATION SERVICES"),l.a.createElement("p",{className:"service-description"},"We offer fast, reliable remediation services for water, mold, smoke and fire damage. All types of spaces and buildings including homes, mobile homes and small commercial properties. Situations that require remediation can be stressful, so we make sure our customers fully understand the processes we follow to carefully and methodically return their homes and offices to pre-damage condition. We strive to save and restore, not demolish, whenever possible."),l.a.createElement("ul",{className:"snow-removal-list"},l.a.createElement("li",null,"Comprehensive inspection reports"),l.a.createElement("li",null,"Expert remediation services"),l.a.createElement("li",null,"Foundation cracks sealed"),l.a.createElement("li",null,"Hazmat and mold certified"),l.a.createElement("li",null,"Mold, flood and other water damage"),l.a.createElement("li",null,"Licensed and highly trained technicians"),l.a.createElement("li",null,"Mitigation and structure drying"),l.a.createElement("li",null,"Reconstructing services")),l.a.createElement("div",{className:"image-gallery"},l.a.createElement("img",{src:"images/R7.jpg",alt:""}),l.a.createElement("img",{src:"images/R6.jpg",alt:""}),l.a.createElement("img",{src:"images/R5.jpg",alt:""}),l.a.createElement("img",{src:"images/R4.jpg",alt:""}),l.a.createElement("img",{src:"images/R3.jpg",alt:""}),l.a.createElement("img",{src:"images/R1-768x768.jpg",alt:""})))};var k=function(e){return l.a.createElement("section",{className:"service-page"},l.a.createElement("h2",{className:"service-heading"},"WINTER / DE-WINTERIZATION"),l.a.createElement("p",{className:"service-description"},"You can count on us to ensure that your property is correctly winterized/de-winterized. We strictly adhere to the following proper procedures and materials."),l.a.createElement("ul",{className:"snow-removal-list"},l.a.createElement("li",null,"Cap wires, plug gas & water lines"),l.a.createElement("li",null,"Caution notifications placed throughout the property"),l.a.createElement("li",null,"Environmental friendly products"),l.a.createElement("li",null,"Pipe & pressure inspections"),l.a.createElement("li",null,"Piping system drained & air blown through"),l.a.createElement("li",null,"24/7 SERVICE AVAILABLE")),l.a.createElement("div",{className:"image-gallery"},l.a.createElement("img",{src:"images/winterixzed_matchedsize.png",alt:""}),l.a.createElement("img",{src:"images/1-2.jpg",alt:""}),l.a.createElement("img",{src:"images/5.jpg",alt:""}),l.a.createElement("img",{src:"images/4-1.jpg",alt:""}),l.a.createElement("img",{src:"images/Comp-3-0000000.jpg",alt:""}),l.a.createElement("img",{src:"images/3-1.jpg",alt:""}),l.a.createElement("img",{src:"images/2-2.jpg",alt:""})))};var C=function(e){return l.a.createElement("section",{className:"service-page"},l.a.createElement("section",{className:"service-section"},l.a.createElement("h2",{className:"service-heading"},"LANDSCAPING"),l.a.createElement("p",{className:"service-description"},"Landscaping was our first service and the one on which we built our reputation. We offer exceptional commercial and residential design and installation services with an emphasis on outstanding customer service. Let our professionals create a custom, functional and beautiful design tailored to your ideas and site needs."),l.a.createElement("ul",{className:"snow-removal-list"},l.a.createElement("li",null,"Design & installation"),l.a.createElement("li",null,"All types of plantings; Shrubs, Trees, Flowers"),l.a.createElement("li",null,"Sod"),l.a.createElement("li",null,"Patios & Walkways"),l.a.createElement("li",null,"Walls"))),l.a.createElement("section",{className:"service-section"},l.a.createElement("h2",{className:"service-heading"},"LAWN MAINTENANCE"),l.a.createElement("p",{className:"service-description"},"Our lawn maintenance service goes above and beyond the average company. We use the latest tools and techniques to keep your lawn and garden in top condition and protect your property\u2019s value."),l.a.createElement("ul",{className:"snow-removal-list"},l.a.createElement("li",null,"Bug, fertilizer, and weed control"),l.a.createElement("li",null,"Debris pick up"),l.a.createElement("li",null,"Lawn mowing and edging"),l.a.createElement("li",null,"Mulching"),l.a.createElement("li",null,"Shrub and hedge trimming"),l.a.createElement("li",null,"Spring/fall cleanup"))),l.a.createElement("div",{className:"image-gallery"},l.a.createElement("img",{src:"images/1-3.jpg",alt:""}),l.a.createElement("img",{src:"images/2-3.jpg",alt:""}),l.a.createElement("img",{src:"images/3-2.jpg",alt:""}),l.a.createElement("img",{src:"images/4-2.jpg",alt:""}),l.a.createElement("img",{src:"images/7-2.jpg",alt:""}),l.a.createElement("img",{src:"images/9.jpg",alt:""}),l.a.createElement("img",{src:"images/10.jpg",alt:""}),l.a.createElement("img",{src:"images/12.jpg",alt:""})))};var I=function(e){return l.a.createElement("section",{className:"about-page"},l.a.createElement("h3",{className:"about-headings"},"WE CAN PROVIDE ALL YOUR PROPERTY SERVICES"),l.a.createElement("p",null,"Alta Property Services began with a small crew mowing lawns for REO and REI distressed properties. Soon our customers, appreciating our can-do attitude and attention to detail, asked us to take on larger jobs and to provide more services such as secured services, maintenance, landscaping and remodeling. Today, after years of delivering quality property services to satisfied customers, Alta is now one of Chicago\u2019s fastest growing commercial and residential multi-service providers."),l.a.createElement("p",null,"Alta is your one-stop shop that does it all for you by offering a broad range of services for the development, management, and maintenance of your property. We have maximized our assets and expertise in order to efficiently provide high-quality work on schedule and at competitive prices. Property managers and homeowners know that personal stress and cost overruns can build up fast when using multiple contractors. With our extensive resources and attentive staff, we can do all the work allowing you to focus on your business."," "),l.a.createElement("h3",{className:"about-headings"},"WE CUSTOMIZE OUR JOBS TO MEET YOUR NEEDS"),l.a.createElement("p",null,"Before any work on a project begins, Alta creates a custom service solution built to meet our client\u2019s needs. Whether your property is commercial or residential, large or small\u2013 we listen carefully to you to understand your needs. Then our team designs a solution that meets your goals, schedule, and budget. This strategic planning with you helps us to proactively identify potential issues \u2013saving time and money that is passed on to you."),l.a.createElement("h3",{className:"about-headings"}," ","WE BUILT OUR BUSINESS ON CUSTOMER SATISFACTION"),l.a.createElement("p",null,"We are grateful to our loyal customers who helped Alta grow from a small maintenance operation to the respected multi-service provider we are today. We remain dedicated to our original can-do attitude that kept those customers coming back. At Alta Property Services we are never satisfied until the customer is 100% satisfied. Got a job? We can do it and we can do it right."," "),l.a.createElement("h4",null,l.a.createElement("span",{className:"pres-name"}," Ron Chuman ")," |"," ",l.a.createElement("span",{className:"comp-name"},"President, Alta Property Services")),l.a.createElement("div",{className:"contact-image"},l.a.createElement("img",{src:"images/contactus2.jpg",alt:"",width:"600",height:"300"})))},R=t(17),A=t.n(R),x=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){var e;return Object(s.a)(this,t),(e=a.call(this)).state={successMessage:""},e._onSubmit=e._onSubmit.bind(Object(o.a)(e)),e}return Object(c.a)(t,[{key:"componentDidMount",value:function(){A.a.init("user_Aq5OpcGj199IxwFbbkVRN")}},{key:"_onSubmit",value:function(e){e.preventDefault();A.a.sendForm("default_service","template_vlAfnQhW","#contact-form"),document.getElementById("contact-form").reset(),this.setState({successMessage:"Your email has been sent!"},this.clearMessage())}},{key:"clearMessage",value:function(){var e=this;setTimeout(function(){e.setState({successMessage:""})},5e3)}},{key:"render",value:function(){return l.a.createElement("div",{className:"email-form"},l.a.createElement("h2",null,"Contact Us"),l.a.createElement("h4",null,"Have a question or comment? Need a quote? Message us and we will get right back to you."),l.a.createElement("form",{id:"contact-form",onSubmit:this._onSubmit.bind(this)},l.a.createElement("label",null,"Name"),l.a.createElement("input",{type:"text",name:"from_name",required:!0,onInvalid:function(e){e.target.setCustomValidity("Please enter your Name.")}}),l.a.createElement("label",null,"Email"),l.a.createElement("input",{type:"email",name:"reply_to",required:!0,onInvalid:function(e){e.target.setCustomValidity("Please enter your Email ID.")}}),l.a.createElement("label",null,"Phone Number"),l.a.createElement("input",{type:"number",name:"contact_number",required:!0,minLength:"10",onInvalid:function(e){e.target.setCustomValidity("Please enter your Phone Number.")}}),l.a.createElement("label",null,"Message"),l.a.createElement("textarea",{name:"message_html",required:!0,rows:"8",onInvalid:function(e){e.target.setCustomValidity("Please enter the reason for contacting us in brief.")}}),l.a.createElement("input",{type:"submit",value:"Send Email"})),l.a.createElement("h3",{className:"success-message"},this.state.successMessage),l.a.createElement("div",{className:"contact-image"},l.a.createElement("img",{src:"images/M1web.jpg",alt:"",width:"800",height:"400"})))}}]),t}(l.a.Component),T=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).state={showLoginForm:!1},n}return Object(c.a)(t,[{key:"componentDidMount",value:function(){console.log("BBB"),this.ppwLoginForm()}},{key:"querySt",value:function(e){for(var a=window.location.search.substring(1).split("&"),t=0;t<a.length;t++){var n=a[t].split("=");if(n[0]===e)return n[1]}return!1}},{key:"ppwLoginForm",value:function(e,a){e||(e="#F6F5E4"),a||(a="#000000");var t=this.querySt("ppw_error"),n=this.querySt("ppw_username");!1===t&&(t=""),!1===n&&(n=""),this.setState({ppw_username:n})}},{key:"render",value:function(){return l.a.createElement("section",null,l.a.createElement("h3",null,"Login Page"),l.a.createElement("div",null,l.a.createElement("h4",null,"Work Order Login"),l.a.createElement("div",{id:"ppw_form_in_alta global"},l.a.createElement("form",{method:"post",action:"https://www.propertypreswizard.com/control.php/login/?event=verifyRemote",style:{display:"inline"}},l.a.createElement("fieldset",{style:{backgroundColor:"#F6F5E4"}},l.a.createElement("legend",null,"Log In"),l.a.createElement("label",{for:"id_username",style:{color:"#F6F5E4"}},l.a.createElement("strong",null,"Username")),l.a.createElement("br",null),l.a.createElement("input",{type:"text",id:"id_username",name:"username",size:"20"}),l.a.createElement("br",null),l.a.createElement("label",{for:"id_password",style:{color:"#F6F5E4"}},l.a.createElement("strong",null,"Password")),l.a.createElement("br",null),l.a.createElement("input",{type:"password",id:"id_password",name:"password",size:"20"}),l.a.createElement("br",null),l.a.createElement("input",{type:"submit",name:"login",value:"Login",style:{marginTop:"10px"}}))))),l.a.createElement("img",{alt:"",src:"https://altapropertyservices.com/wp-content/uploads/2017/08/LogoTransparent.png"}))}}]),t}(l.a.Component);var _=function(e){return l.a.createElement("section",null,l.a.createElement("h3",null,"Careers"),l.a.createElement("h5",null,"NO POSITIONS AVAILABLE AT THIS TIME."))};var P=function(e){return l.a.createElement("section",null,l.a.createElement("h3",null,"ServiceArea Page"),l.a.createElement("p",{className:"heading"},"The below map shows the coverage area for our services. If you do not find your area as part of it, please contact us to find out. Call us at 630.461.9229"),l.a.createElement("p",null,l.a.createElement("iframe",{className:"area",title:"Service Area",src:"https://www.google.com/maps/d/embed?mid=10rol1CMJNjYzs-hR-w7qrUMurWox7sVy",width:"1200",height:"720"})))},D=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).state={menuData:[{value:"/home",label:"HOME"},{value:"/about",label:"ABOUT"},{type:"dropdown",label:"SERVICES",value:"/services",options:[{value:"/snowremoval",label:"Snow Removal"},{value:"/repairsandrehab",label:"Repairs and Rehabs"},{value:"/securedservices",label:"Secured Services"},{value:"/trashout",label:"Trash Out"},{value:"/landscaping",label:"Landscaping"},{value:"/winterization",label:"Winterization"}]},{value:"/area",label:"SERVICE AREA"},{value:"/contact",label:"CONTACT US"},{value:"/login",label:"LOGIN"}],footerData:[{value:"contact",label:"CONTACT"},{value:"login",label:"LOGIN"},{value:"careers",label:"CAREERS"}],showMenu:!1},n.menuToggle=n.menuToggle.bind(Object(o.a)(n)),n.resize=n.resize.bind(Object(o.a)(n)),n}return Object(c.a)(t,[{key:"menuToggle",value:function(){var e=this.state.showMenu;this.setState({showMenu:!e})}},{key:"componentDidMount",value:function(){window.addEventListener("resize",this.resize.bind(this)),this.resize()}},{key:"resize",value:function(){window.innerWidth>600?this.setState({showMenu:!0}):this.setState({showMenu:!1})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.resize.bind(this))}},{key:"render",value:function(){return l.a.createElement(d.a,null,l.a.createElement("div",{className:"App container"},l.a.createElement("header",{className:"header"},l.a.createElement(d.b,{tabIndex:"0",role:"menuitem",to:"/home"},l.a.createElement("img",{className:"logo",alt:"Alta Property Services Logo and Home",src:"images/LogoTransparent.png"})),l.a.createElement("button",{className:"burger-menu",onClick:this.menuToggle},"III"),this.state.showMenu&&l.a.createElement(h,{menuData:this.state.menuData})),l.a.createElement("main",null,l.a.createElement(g.a,{path:"/home",component:f}),l.a.createElement(g.a,{path:"/about",component:I}),l.a.createElement(g.a,{path:"/services",component:w}),l.a.createElement(g.a,{path:"/snowremoval",component:y}),l.a.createElement(g.a,{path:"/repairsandrehab",component:N}),l.a.createElement(g.a,{path:"/securedservices",component:j}),l.a.createElement(g.a,{path:"/trashout",component:S}),l.a.createElement(g.a,{path:"/landscaping",component:C}),l.a.createElement(g.a,{path:"/remediationservices",component:O}),l.a.createElement(g.a,{path:"/winterization",component:k}),l.a.createElement(g.a,{path:"/area",component:P}),l.a.createElement(g.a,{path:"/contact",component:x}),l.a.createElement(g.a,{path:"/login",component:T}),l.a.createElement(g.a,{path:"/careers",component:_}),l.a.createElement(g.a,{path:"/",exact:!0,component:f})),l.a.createElement("footer",{className:"footer"},l.a.createElement("h4",{tabIndex:"0",className:"question-phone"},"Have a question about our services?"," ",l.a.createElement("span",{className:"phone-num"},"Please call us at 630.461.9229")),l.a.createElement(h,{menuData:this.state.footerData}))))}}]),t}(l.a.Component),L=document.getElementById("root");i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(D,null)),L)}},[[22,1,2]]]);
//# sourceMappingURL=main.a54e7fcd.chunk.js.map