import React from "react";
import blank from "../assets/img/blank.png";
function Home() {
  return (
    <>
      <div className="py-5 bg-purple">
        <div className="py-4"></div>
      </div>
      <div id="homePic" className="text-center my-auto mb-4">
        <img
          src={blank}
          className="rounded-circle w-100 border-5 border-purple border"
          alt="" //style="background-image: url(data:image/png;base64,{{vbData.userdata.photo}}); background-position:center; background-size:cover;"
        />
      </div>
      <div className="p-4">
        <p className="lead fw-bold text-center">
          {/* {{vbData.userdata.name}} */}
        </p>
        <p>
          <a
            href="/agenda/requests"
            className="btn btn-primary w-100 btn-primary rounded-pill"
          >
            <i className="fas fa-calendar-alt"></i> Solicitações de agendamento
          </a>
        </p>
        <p className="border border-top-0 border-start-0 border-end-0 border-dashed border-pink lead text-center pb-2">
          Sua agenda
        </p>
        <p className="small text-center text-muted">Próximos compromissos</p>
        <div className="mb-4">
          <p
            className="text-center text-muted bg-light p-3"
            ng-show="vbData.homeEvents.length == 0"
          >
            Você não tem nenhum próximo compromisso.
          </p>

          {/* Event card */}
          <a
            href="/agenda/details"
            className="text-decoration-none mb-4 d-block"
            ng-repeat="event in vbData.homeEvents"
            ng-click="openEvent(event)"
            ng-show="vbData.homeEvents.length > 0"
          >
            <div className="rounded-top border-bottom border-secondary p-3 bg-purple shadow-sm text-white">
              <div className="d-flex justify-content-between bg align-items-center">
                <p className="mb-0">{/* {{event.date}}, {{event.time}} */}</p>
                <p className="mb-0">{/* Nº {{event.id}} */}</p>
              </div>
            </div>

            <div className="rounded-bottom p-3 bg-purple shadow text-white">
              <p className="lead fw-bold mb-0">{/* {{event.name}} */}</p>
              <p className="mb-0 text-truncate pe-3 shadow">
                <small className="small" ng-repeat="service in event.services">
                  {/* {{service.title}}<em ng-show="!$last">, </em> */}
                </small>
              </p>
            </div>
          </a>
          <div className="mb-5 pb-3"></div>
        </div>
      </div>
    </>
  );
}

export default Home;
