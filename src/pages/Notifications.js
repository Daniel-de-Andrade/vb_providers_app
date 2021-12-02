function Notifications() {
  return (
    <>
      <div className="p-4">
        Back button
        <img
          src="/assets/img/back.svg"
          alt=""
          onclick="history.back(-1)"
          className="mb-4"
        />
        <h4 className="text-muted text-uppercase text-center mb-4">
          Notificações
        </h4>
        <div className="p-4 text-muted text-center">
          Você não possui nenhuma notificação.
        </div>
        <div className="p-4 d-none">
          <a
            href="/ads"
            className="text-muted d-block text-decoration-none border rounded-pill mb-3 shadow-sm p-3"
          >
            <p className="mb-0">
              <small className="text-muted small">
                Sua solicitação de agendamento em André Cabeleireiro foi aceita
              </small>
            </p>
          </a>
        </div>
      </div>
    </>
  );
}

export default Notifications;
