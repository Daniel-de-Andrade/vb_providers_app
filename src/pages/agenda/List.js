function EventList() {
  return (
    <>
      <div class="px-4 py-5">
        <h4 class="text-muted text-uppercase text-center mb-4">
          <i class="fas fa-calendar-alt"></i> Agenda
        </h4>

        <div class="py-4 d-none">
          <ul class="nav nav-justified nav-pills align-items-center d-none">
            <li class="nav-item me-2">
              <a class="nav-link active">
                <i class="fas fa-angle-left"></i>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link small text-muted" href="#">
                03/11
              </a>
            </li>
            <li class="nav-item mx-2">
              <a class="nav-link bg-light fw-bold" href="#">
                04/11
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link small text-muted" href="#">
                05/11
              </a>
            </li>
            <li class="nav-item ms-2">
              <a class="nav-link active">
                <i class="fas fa-angle-right"></i>
              </a>
            </li>
          </ul>
        </div>

        <p
          ng-show="vbData.agenda.length == 0"
          class="p-3 bg-light rounded text-muted text-center"
        >
          Não há nenhum agendamento confirmado para esta data.
        </p>

        <div class="mb-4">
          {/* Event card */}
          <a
            href="/agenda/details"
            class="text-decoration-none mb-4 d-block"
            ng-repeat="event in vbData.agenda"
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
                  {/* {{service.title}}<em ng-show="!$last">, </em> */}
                </small>
              </p>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}

export default EventList;
