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
    const Vacansy = (state) => <div>Вакансия:{state.vacansy}</div>
    const Cash = (state) => <div>Желаемая зарплата:{state.cash}</div>
    const FullName = (state) => <div>ФИО:{state.fullName}</div>
    const Phone = (state) => <div>Контактный телефон:{state.phone}</div>
    const Mail = (state) => <div>Mail:{state.mail}</div>
    const Nationality = (state) => <div>Гражданство:{state.nationality}</div>
    const Gender = (state) => <div>Пол:{state.gender}</div>
    const Age = (state) => <div>Возраст:{state.age}</div>
    const Married = (state) => <div>Семейное положение:{state.married}</div>
    const Education = (state) => <div>Образование:{state.education}</div>
    const Experience = (state) => <div>Опыт работы:{state.experience}</div>
    const Date = (state) => <div>Дата:{state.date}</div>
    const Valid = (state) => <div>Разрешаю обработку личных данных:{state.valid}</div>
    return (
      <section className="info">
         <div className="info--block">
          <Vacansy vacansy={state.vacansy} />
         </div>
         <div className="info--block">
           <Cash cash={state.cash} />
         </div>
         <div className="info--block">
           <FullName fullName={state.fullName} />
         </div>
         <div className="info--block">
           <Phone phone={state.phone} />
         </div>
         <div className="info--block">
           <Mail mail={state.mail} />
         </div>
         <div className="info--block">
           <Nationality nationality={state.nationality} />
         </div>
         <div className="info--block">
           <Gender gender={state.gender} />
         </div>
         <div className="info--block">
          <Age age={state.age} />
         </div>
         <div className="info--block">
           <Married married={state.married} />
         </div>
         <div className="info--block">
           <Education education={state.education} />
         </div>
         <div className="info--block">
           <Experience experience={state.experience} />
         </div>
         <div className="info--block">
           <Date date={state.date} />
         </div>
         <div className="info--block">
           <Valid valid={state.valid} />
         </div>
     </section>
   );
  }
}
