'use strict';var _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a};!function(require,directRequire){const a=require('react'),b=require('redux'),c=require('./1fcc6bd55b687d154a4247e57fe3011d.js'),d=require('./cc2c2970ff81ae4a83123e81ee123da2.js'),e=require('./a8c87029da0fa06e986298d447ab0fe2.js'),f=require('./6dc679a20a8230e9e9f122b9acba4b0c.js'),g=require('./72653d4b93cdd7443296229431a7aa9a.js'),h=require('./d3976cc01aeebc5b09e11c4135b6bd8d.js'),i=require('./53ec6a2d71bd5a4846662679c61fe819.js'),j=require('./875171e7b864aa58d026d4fa0999fbd1.js'),k=require('./9fdd4ac31a05c27355910f0d74accd4c.js'),{connect:l}=require('react-redux');class m extends a.Component{constructor(a){super(a),this.state={saveBtnTitle:'\u4E0A\u4F20',show:a.show,desc:a.desc,version:a.version},this.lock=!1}componentDidMount(){this.props.setMask(!0)}componentWillUnmount(){this.props.setMask(!1)}componentWillReceiveProps(a){let b={};a.show!=this.props.show&&(b.show=a.show),a.version!=this.props.version&&(b.version=a.version),a.desc!=this.props.desc&&(b.desc=a.desc),this.setState(b)}onClose(){this.lock=!1,this.setState({saveBtnTitle:'\u4E0A\u4F20'}),this.setState({show:!1})}onConfirm(){if(this.lock)return;if(!this.state.version)return this.setState({versionError:!0}),void this.refs.versionInput.focus();if(k.plugin==this.props.project.compileType&&!/^[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}$/.test(this.state.version))return this.refs.versionInput.focus(),void this.setState({versionError:!0});let a=this.state.desc;a||(a=this.getPlaceHolder()),this.lock=!0,this.setState({saveBtnTitle:'\u4E0A\u4F20\u4E2D',versionError:!1}),setTimeout(async()=>{let b=this.props,c=b.project;f({version:this.state.version,desc:a}).then((a)=>{console.log('upload plugin doc res body',a),this.lock=!1,this.props.setTimeRecords({pluginDocLastUploadTime:+new Date}),this.setState({show:!1}),this.props.showSuccessTip('\u63D2\u4EF6\u6587\u6863\u4E0A\u4F20\u6210\u529F')}).catch((a)=>{this.lock=!1,g.error(`upload ${a}`),this.setState({show:!1}),this.props.setConfirmInfo({show:!0,showCancel:!1,content:`上传错误，原因：${a}`})})})}getPlaceHolder(){let a=new Date;return`${this.props.nickName} 在 ${a.toLocaleDateString()} ${a.toLocaleTimeString()} 提交上传`}onInputChange(a){let b=a.currentTarget,c=b.dataset,d=c.name;this.setState({[d]:b.value})}onVersionChange(a){let b=a.target.value;b=this.props.project.compileType==k.plugin?b.replace(/[^0-9\.]/g,''):b.replace(/[^0-9a-zA-Z\.]/g,''),this.setState({version:b})}onAnimationOut(){this.props.setUploadPluginDocInfo({show:!1})}render(){const b=this.props;return a.createElement(j,{show:this.state.show,style:{width:600,marginLeft:-300},inClassName:'ui-animate-pull-down ui-dialog',outClassName:'ui-animate-pull-up ui-dialog',onAnimationOut:this.onAnimationOut.bind(this)},a.createElement('div',{className:'ui-dialog-bd'},a.createElement('div',{className:'ui-form'},a.createElement('div',{className:'ui-form-item ui-form-item-inline'},a.createElement('label',{className:'ui-form-label'},'\u7248\u672C\u53F7'),a.createElement('div',{className:'ui-form-controls'},a.createElement('div',{className:'ui-input-box'},a.createElement('input',{type:'text',ref:'versionInput',value:this.state.version,maxLength:10,"data-name":'version',onChange:this.onVersionChange.bind(this),className:'ui-input'})),a.createElement('p',{className:'ui-form-tips',style:{color:this.state.versionError?'red':'#888888'}},b.project.compileType==k.plugin?'\u6570\u5B57.\u6570\u5B57.\u6570\u5B57 \u683C\u5F0F\uFF0C\u6BCF\u4E2A\u6570\u5B57\u6700\u5927\u4E3A 999\u3002\u5982 1.0.0':'\u4EC5\u9650\u5B57\u6BCD\u3001\u6570\u5B57\u3001.'))),a.createElement('div',{className:'ui-form-item ui-form-item-inline'},a.createElement('label',{className:'ui-form-label'},'\u5907\u6CE8'),a.createElement('div',{className:'ui-form-controls'},a.createElement('div',{className:'ui-input-box'},a.createElement('input',{type:'text',ref:'descInput',value:this.state.desc,maxLength:100,"data-name":'desc',onChange:this.onInputChange.bind(this),placeholder:this.getPlaceHolder(),className:'ui-input'})))))),a.createElement('div',{className:'ui-dialog-ft'},a.createElement('div',{className:'ui-dialog-action'},a.createElement('button',{className:'ui-button ui-button-default',onClick:this.onClose.bind(this)},'\u53D6\u6D88'),a.createElement('button',{className:'ui-button ui-button-primary',onClick:this.onConfirm.bind(this)},this.state.saveBtnTitle))))}}module.exports=l((a)=>{let b=a.info.uploadPluginDocInfo,c=a.project.current;return _extends({},b,{project:c,nickName:a.user.nickName})},(a)=>{const b=h.bindActionCreators(c.setConfirmInfo,a);return{showSuccessTip:h.bindActionCreators(c.showSuccessTip,a),setUploadPluginDocInfo:h.bindActionCreators(c.setUploadPluginDocInfo,a),setMask:h.bindActionCreators(e.setMask,a),setConfirmInfo:h.bindActionCreators(c.setConfirmInfo,a),setTimeRecords:h.bindActionCreators(d.setTimeRecords,a),setConfirmInfoAsync(a){return new Promise((c)=>{b(_extends({},a,{callback(a){c(a)}}))})}}})(m)}(require('lazyload'),require);