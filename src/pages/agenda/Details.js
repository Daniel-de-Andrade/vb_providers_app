function EventDetails() {
  return (
    <>
      <div class="p-4 py-5">
        {/* Back button */}
        <a href="/agenda">
          <img src="/assets/img/back.svg" alt="" class="mb-4" />
        </a>

        <h4 class="text-muted text-uppercase text-center pb-3">
          <i class="fas fa-calendar-alt"></i> Detalhes do agendamento
        </h4>

        <div class="d-flex justify-content-between align-items-center rounded-top border-bottom border-secondary p-3 bg-purple shadow-sm text-white">
          <p class="mb-0">{/* {{openedEvent.date}}, {{openedEvent.time}} */}</p>
          <p class="mb-0">
            Nº
            {/* {{openedEvent.id}} */}
          </p>
        </div>

        <div class="rounded-bottom p-3 bg-purple shadow text-white mb-4">
          <p class="lead fw-bold">{/* {{openedEvent.name}} */}</p>
          <p class="mb-0 pe-3 shadow">
            <small
              class="small d-block"
              ng-repeat="service in openedEvent.services"
            >
              -{/* {{service.title}} */}
            </small>
          </p>
        </div>

        <p class="text-primary fw-bold mb-0">
          <i class="fas fa-map-marker-alt"></i> Local do atendimento
        </p>
        <p class="lead">{/* {{openedEvent.formatted_address}} */}</p>

        <p class="text-primary fw-bold mb-0">Valor total:</p>
        <p class="lead">{/* {{eventTotalPrice | currency}} */}</p>

        <p class="text-primary fw-bold mb-0">Status do agendamento:</p>
        <p class="lead">{/* {{openedEvent.status}} */}</p>

        <p
          class="text-primary fw-bold mb-0"
          ng-show="openedEvent.title != null"
        >
          Nome do anúncio:
        </p>
        <p class="lead">{/* {{openedEvent.title}} */}</p>

        <p
          class="text-primary fw-bold mb-0"
          ng-show="openedEvent.phone != null"
        >
          Telefone do cliente:
        </p>
        <p class="lead">{/* {{openedEvent.phone}} */}</p>

        <button
          class="btn btn-primary rounded-pill w-100 mb-2"
          ng-show="openedEvent.status == 'Confirmado'"
          data-bs-toggle="modal"
          data-bs-target="#finishEventModal"
        >
          <i class="fas fa-check"></i> Finalizar agendamento
        </button>
        <button
          class="btn btn-success rounded-pill w-100 mb-2"
          ng-show="openedEvent.status == 'Aguardando confirmação'"
          data-bs-toggle="modal"
          data-bs-target="#confirmEventModal"
        >
          <i class="fas fa-check"></i> Confirmar agendamento
        </button>
        <button
          class="btn btn-danger rounded-pill w-100 mb-2"
          ng-hide="openedEvent.status == 'Concluído'"
          data-bs-toggle="modal"
          data-bs-target="#cancelEventModal"
        >
          <i class="fas fa-times"></i> Cancelar agendamento
        </button>
        <button class="btn btn-outline-dark rounded-pill w-100 mb-5">
          <i class="fas fa-question-circle"></i> Ajuda
        </button>
      </div>

      {/* Finish event modal */}
      <div
        class="modal fade"
        id="finishEventModal"
        tabindex="-1"
        aria-labelledby="finishEventModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="finishEventModalLabel">
                Confirmar agendamento
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body text-center">
              Tem certeza que deseja finalizar este agendamento?
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn rounded-pill btn-secondary"
                data-bs-dismiss="modal"
              >
                Fechar
              </button>
              <button
                type="button"
                class="btn rounded-pill btn-primary"
                ng-click="finish(openedEvent)"
              >
                <span ng-show="!loading">Finalizar</span>
                <span ng-show="loading">Confirmando...</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Confirm event modal */}
      <div
        class="modal fade"
        id="confirmEventModal"
        tabindex="-1"
        aria-labelledby="confirmEventModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="confirmEventModalLabel">
                Confirmar agendamento
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body text-center">
              Tem certeza que deseja confirmar este agendamento?
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn rounded-pill btn-secondary"
                data-bs-dismiss="modal"
              >
                Fechar
              </button>
              <button
                type="button"
                class="btn rounded-pill btn-primary"
                ng-click="confirm(openedEvent)"
              >
                <span ng-show="!loading">Confirmar</span>
                <span ng-show="loading">Confirmando...</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Cancel event modal */}
      <div
        class="modal fade"
        id="cancelEventModal"
        tabindex="-1"
        aria-labelledby="cancelEventModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="cancelEventModalLabel">
                Cancelar agendamento
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              Tem certeza que deseja cancelar este agendamento?
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn rounded-pill btn-secondary"
                data-bs-dismiss="modal"
              >
                Fechar
              </button>
              <button
                type="button"
                class="btn rounded-pill btn-primary"
                ng-click="cancel(openedEvent)"
              >
                <span ng-show="!loading">Cancelar</span>
                <span ng-show="loading">Cancelando...</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EventDetails;
