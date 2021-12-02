function EventRequests() {
  return (
    <>
      <div class="py-5 px-4">
        <h4 class="text-muted text-uppercase text-center mb-4">
          <i class="fas fa-calendar-alt"></i> Solicitações
        </h4>

        <div class="mb-5">
          <p
            class="text-center text-muted p-3 bg-light"
            ng-show="vbData.requests.length == 0"
          >
            Você não tem nenhuma solicitação de agendamento.
          </p>

          {/* Event card */}
          <a
            href="/agenda/details"
            class="text-decoration-none d-block mb-4"
            ng-repeat="event in vbData.requests"
            ng-click="openEvent(event)"
          >
            <div class="rounded-top border-bottom border-secondary p-3 bg-purple shadow-sm text-white">
              <div class="d-flex justify-content-between bg align-items-center">
                <p class="mb-0">{/* {{event.date}}, {{event.time}} */}</p>
                <p class="mb-0">
                  Nº
                  {/* {{event.id}} */}
                </p>
              </div>
            </div>

            <div class="rounded-bottom p-3 bg-purple shadow text-white">
              <p class="lead fw-bold mb-0">{/* {{event.name}} */}</p>
              <p class="mb-0 text-truncate pe-3 shadow">
                <small class="small" ng-repeat="service in event.services">
                  {/* {{service.title}} */}
                  <em ng-show="!$last">, </em>
                </small>
              </p>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}

export default EventRequests;
