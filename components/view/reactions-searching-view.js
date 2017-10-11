import React, {Component} from 'react';

class ReactSearch extends Component{
    render(){
        return(
            <div className="row">
<div className="col-md-12">
    <span className="float-left">{this.props.index+1}</span>
                    <img className="img-responsive img-hover float-left" src="img/1.png" alt="" />
                    <span className="glyphicon glyphicon-plus float-left"></span>
                    <img className="img-responsive img-hover float-left" src="img/2.png" alt="" />
                    <span className="glyphicon glyphicon-arrow-right float-left"></span>
                    <img className="img-responsive img-hover float-left" src="img/3.png" alt="" />
</div>
                <div className="col-md-12">
                    <ul className="nav nav-tabs">
                        <li role="presentation" className="active"><a href="#">Home</a></li>
                        <li role="presentation"><a href="#">Profile</a></li>
                        <li role="presentation"><a href="#">Messages</a></li>
                    </ul>
                    <p>In the above Button component the Button.css styles handle the common button styles. In this example just a .button class
                        Then in my component where I want to use the Button, and I also want to modify things like the position of the button, I can set extra styles in Promo.css and pass through as the className prop. In this example again called .button class. I could have called it anything e.g. promoButton.
                        Of course with css modules this class will be .Promo__button___2MVMD whereas the button one will be something like .Button__button___3972N</p>
                </div>
            </div>
        );
    }
}

export default ReactSearch;