import React, { useState } from "react";
import back from "../../assets/img/back.svg";
import Example from "../../components/modals/Modal";
import horariosAgendamento from "../../fakeData/horariosAgendamento.json";

function AdsAvailabilities() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="p-4 py-5">
        {/* <!-- Back button --> */}
        <a href="/ads/details">
          <img src={back} alt="" className="mb-4" />
        </a>

        <h4 className="text-muted text-uppercase text-center pb-4">
          <i className="far fa-clock"></i> Horários de atendimento
        </h4>

        <div className="list-group">
          {show ? <Example handleClose={handleClose} /> : null}
          {horariosAgendamento.map((horarioAgendamento) => (
            <button
              key={horarioAgendamento.id}
              className="list-group-item list-group-item-action d-flex align-items-center justify-content-between"
              onClick={() => handleShow()}
            >
              <span>{horarioAgendamento.start}</span>
              <div>
                <span ng-show="day.status == 'Fechado'">Fechado</span>
                <span ng-show="day.status == 'Aberto'">
                  {/* {{day.start | mask: '99:99'}} - {{day.end | mask: '99:99'}} */}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default AdsAvailabilities;
