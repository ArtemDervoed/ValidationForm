import React from 'react';
import {connect} from 'react-redux';
import {store} from '../store/store';

class Page extends React.Component {
  render() {
    console.log(this.props);
    const Vacansy = () => <div> Вакансия:</div>
    const Cash = () => <div>Желаемая зарплата:</div>
    const FullName = () => <div>ФИО:</div>
    const Phone = () => <div>Контактный телефон:</div>
    const Mail = () => <div>Mail:</div>
    const Nationality = () => <div>Гражданство:</div>
    const Gender = () => <div>Пол:</div>
    const Age = () => <div>Возраст:</div>
    const Married = () => <div>Семейное положение:</div>
    const Education = () => <div>Образование:</div>
    const Experience = () => <div>Опыт работы:</div>
    const Date = () => <div>Дата:</div>
    const Valid = () => <div>Разрешаю обработку личных данных:</div>
    return (
      <section className="info">
         <div className="info--block">
          <Vacansy value="Вакансия:"/>
          <div>{this.props.user.vacansy}</div>
         </div>
         <div className="info--block">
           <Cash />
           <div>{this.props.user.cash}</div>
         </div>
         <div className="info--block">
           <FullName />
           <div>{this.props.user.fullName}</div>
         </div>
         <div className="info--block">
           <Phone />
           <div>{this.props.user.phone}</div>
         </div>
         <div className="info--block">
           <Mail />
           <div>{this.props.user.mail}</div>
         </div>
         <div className="info--block">
           <Nationality />
           <div>{this.props.user.nationality}</div>
         </div>
         <div className="info--block">
           <Gender />
           <div>{this.props.user.gender}</div>
         </div>
         <div className="info--block">
          <Age />
          <div>{this.props.user.age}</div>
         </div>
         <div className="info--block">
           <Married />
           <div>{this.props.user.married}</div>
         </div>
         <div className="info--block">
           <Education />
           <div>{this.props.user.education}</div>
         </div>
         <div className="info--block">
           <Experience />
           <div>{this.props.user.experience}</div>
         </div>
         <div className="info--block">
           <Date />
           <div>{this.props.user.date}</div>
         </div>
         <div className="info--block">
           <Valid />
           <div>{this.props.user.valid}</div>
         </div>
     </section>
   );
 }
}

const	mapStateToProps	=	(state)	=> ({
  ...state,
});

export default connect(mapStateToProps)(Page);
