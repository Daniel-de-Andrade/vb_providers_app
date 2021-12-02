import React from "react";

function Home() {
  return (
    <>
      <div class="py-5 bg-purple">
        <div class="py-4"></div>
      </div>
      <div id="homePic" class="text-center my-auto mb-4">
        <img
          src="/assets/img/blank.png"
          className="rounded-circle w-100 border-5 border-purple border"
          alt="" //style="background-image: url(data:image/png;base64,{{vbData.userdata.photo}}); background-position:center; background-size:cover;"
        />
      </div>
      <div class="p-4">
        <p class="lead fw-bold text-center">{/* {{vbData.userdata.name}} */}</p>
        <p>
          <a
            href="/agenda/requests"
            class="btn btn-primary w-100 btn-primary rounded-pill"
          >
            <i class="fas fa-calendar-alt"></i> Solicitações de agendamento
          </a>
        </p>
        <p class="border border-top-0 border-start-0 border-end-0 border-dashed border-pink lead text-center pb-2">
          Sua agenda
        </p>
        <p class="small text-center text-muted">Próximos compromissos</p>
        <div class="mb-4">
          <p
            class="text-center text-muted bg-light p-3"
            ng-show="vbData.homeEvents.length == 0"
          >
            Você não tem nenhum próximo compromisso.
          </p>

          {/* Event card */}
          <a
            href="/agenda/details"
            class="text-decoration-none mb-4 d-block"
            ng-repeat="event in vbData.homeEvents"
            ng-click="openEvent(event)"
            ng-show="vbData.homeEvents.length > 0"
          >
            <div class="rounded-top border-bottom border-secondary p-3 bg-purple shadow-sm text-white">
              <div class="d-flex justify-content-between bg align-items-center">
                <p class="mb-0">{/* {{event.date}}, {{event.time}} */}</p>
                <p class="mb-0">{/* Nº {{event.id}} */}</p>
              </div>
            </div>

            <div class="rounded-bottom p-3 bg-purple shadow text-white">
              <p class="lead fw-bold mb-0">{/* {{event.name}} */}</p>
              <p class="mb-0 text-truncate pe-3 shadow">
                <small class="small" ng-repeat="service in event.services">
                  {/* {{service.title}}<em ng-show="!$last">, </em> */}
                </small>
              </p>
            </div>
          </a>
          <div class="mb-5 pb-3"></div>
        </div>
      </div>
    </>
  );
}

export default Home;
