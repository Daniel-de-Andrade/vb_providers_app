import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "@restart/ui/esm/Button";

function Example({ handleClose = () => {} }, show) {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Dia da semana</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mb-4">
            <p className="text-center">Horários de Dia da semana</p>
            <div className="mb-3">
              <label htmlFor="" className="form-label">
                Disponibilidade
              </label>
              <select
                name="status"
                ng-model="openedAvailability.status"
                className="form-select rounded-pill"
                ng-required="true"
                id=""
              >
                <option value="">Selecione</option>
                <option value="Aberto">Aberto</option>
                <option value="Fechado">Fechado</option>
              </select>
            </div>
            <div className="row">
              <div className="col-6">
                <label className="perfilLabel" htmlFor="start">
                  De:
                </label>
                <input
                  type="text"
                  name="start"
                  ng-model="openedAvailability.start"
                  className="form-control rounded-pill"
                  ui-mask="99:99"
                />
              </div>
              <div className="col-6">
                <label className="perfilLabel" htmlFor="end">
                  Até:
                </label>
                <input
                  type="text"
                  name="end"
                  ng-model="openedAvailability.end"
                  className="form-control rounded-pill"
                  ui-mask="99:99"
                />
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="d-flex align-items-center justify-content-between pt-3 border-top">
          <Button
            className="btn btn-secondary rounded-pill"
            onClick={handleClose}
          >
            Cancelar
          </Button>
          <Button
            className="btn btn-primary rounded-pill me-2"
            onClick={handleClose}
          >
            Salvar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;
