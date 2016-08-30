import React from 'react';

export default class Page extends React.Component {
  render() {
    const state = {
      vacansy: "",
      cash: "",
      fullName: "",
      phone: "",
      mail: "",
      nationality: "",
      gender: "",
      age: "",
      married: "",
      education: "",
      experience: "",
      date: "",
      valid: ""
    };
    const Vacansy = (state) => <div>{state.vacansy}</div>
    const Cash = (state) => <div>{state.cash}</div>
    const FullName = (state) => <div>{state.fullName}</div>
    const Phone = (state) => <div>{state.phone}</div>
    const Mail = (state) => <div>{state.mail}</div>
    const Nationality = (state) => <div>{state.nationality}</div>
    const Gender = (state) => <div>{state.gender}</div>
    const Age = (state) => <div>{state.age}</div>
    const Married = (state) => <div>{state.married}</div>
    const Education = (state) => <div>{state.education}</div>
    const Experience = (state) => <div>{state.experience}</div>
    const Date = (state) => <div>{state.date}</div>
    const Valid = (state) => <div>{state.valid}</div>
    return (
      <section className="info">
         <div className="info--block">
           <span>Вакансия:</span>
          <Vacansy vacansy={state.vacansy} />
         </div>
         <div className="info--block">
           <span>Желаемая зарплата:</span>
           <Cash cash={state.cash} />
         </div>
         <div className="info--block">
           <span>ФИО:</span>
           <FullName fullName={state.fullName} />
         </div>
         <div className="info--block">
           <span>Контактный телефон:</span>
           <Phone phone={state.phone} />
         </div>
         <div className="info--block">
           <span>Mail:</span>
           <Mail mail={state.mail} />
         </div>
         <div className="info--block">
           <span>Гражданство:</span>
           <Nationality nationality={state.nationality} />
         </div>
         <div className="info--block">
           <span>Пол:</span>
           <Gender gender={state.gender} />
         </div>
         <div className="info--block">
           <span>Возраст:</span>
          <Age age={state.age} />
         </div>
         <div className="info--block">
           <span>Семейное положение:</span>
           <Married married={state.married} />
         </div>
         <div className="info--block">
           <span>Образование:</span>
           <Education education={state.education} />
         </div>
         <div className="info--block">
           <span>Опыт работы:</span>
           <Experience experience={state.experience} />
         </div>
         <div className="info--block">
           <span>Дата:</span>
           <Date date={state.date} />
         </div>
         <div className="info--block">
           <span>Разрешаю обработку личных данных:</span>
           <Valid valid={state.valid} />
         </div>
     </section>
   );
  }
}
