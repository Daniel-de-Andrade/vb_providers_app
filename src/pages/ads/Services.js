import back from '../../assets/img/back.svg'
function AdsServices() {
    return <>
        <div className="p-4 py-5">
            {/* <!-- Back button --> */}
            <a href="/ads/details">
                <img src={back} alt="" className="mb-4" />
            </a>

            <h4 className="text-muted text-uppercase text-center pb-4">
                <i className="fas fa-list"></i> Lista de serviços
            </h4>

            <p ng-show="openedAds.services.length == 0" className="text-center text-muted">
                Este anúncio não possui nenhum serviço.
            </p>

            <table className="table small" ng-show="openedAds.services.length > 0">
                <thead>
                    <tr>
                        <th scope="col">Nome</th>
                        <th scope="col">Valor</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr ng-repeat="service in openedAds.services track by $index">
                        <td className="text-truncate align-middle" style={{'maxWidth': '150px'}}>Serviço</td>
                        <td className="align-middle">$0,00</td>
                        <td className="align-middle text-end">
                            <a className="d-inline-block px-2" ng-click="openService(service)" data-bs-toggle="modal"
                                data-bs-target="#updateServiceModal" href="">
                                <i className="fas fa-edit text-muted"></i>
                            </a>
                            <a className="d-inline-block px-2" ng-click="openService(service)" data-bs-toggle="modal"
                                data-bs-target="#deleteServiceModal" href="">
                                <i className="fas fa-trash text-muted"></i>
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>

            <button type="button" className="btn btn-primary rounded-pill w-100" data-bs-toggle="modal"
                data-bs-target="#addServicesModal">
                <i className="fas fa-plus"></i> Adicionar serviço
            </button>
        </div>

        {/* <!-- Adicionar seviços --> */}
        <div className="modal fade" id="addServicesModal" data-bs-keyboard="false" tabIndex="-1"
            aria-labelledby="addServicesModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="addServicesModalLabel">Adicionar serviço</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">

                        <form name="addServiceForm" className="" ng-submit="create(addServiceData)">
                            <div className="mb-3">

                                <div className="mb-3">
                                    <label htmlFor="address" className="form-label">
                                        Nome do serviço
                                    </label>
                                    <input type="text" className="rounded-pill form-control" name="title"
                                        ng-model="addServiceData.title" ng-required="true" />
                                </div>

                                <div className="mb-3">
                                    <label className="perfilLabel">
                                        Categoria
                                    </label>
                                    <select className="rounded-pill form-select" name="category" ng-model="addServiceData.category">
                                        <option value="">Selecione</option>
                                        <option value="hair">Cabelo</option>
                                        <option value="nails">Unhas</option>
                                        <option value="eyebrows">Sobrancelhas</option>
                                        <option value="makeup">Maquiagem</option>
                                        <option value="spa">Spá</option>
                                        <option value="shaving">Depilação</option>
                                    </select>
                                </div>

                                <div className="mb-4">
                                    <label className="form-label">
                                        Valor
                                    </label>
                                    <input type="text" className="rounded-pill form-control" name="price"
                                        ng-model="addServiceData.price" ng-required="true" />
                                </div>
                            </div>

                            <div className="d-flex w-100 justify-content-end">
                                <button type="submit" className="btn btn-primary rounded-pill me-2"
                                    ng-disabled="addServiceForm.$invalid">
                                    <span ng-show="!loading">Salvar</span>
                                    <span ng-show="loading">Salvando...</span>
                                </button>

                                <a href="" className="btn btn-secondary rounded-pill" data-bs-dismiss="modal" aria-label="Close">
                                    Cancelar
                                </a>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
        {/* <!-- UPDATE SERVICE MODAL --> */}
        <div className="modal fade" id="updateServiceModal" tabIndex="-1" aria-labelledby="updateServiceModalLabel"
            aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="updateServiceModalLabel">Editar serviço</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form name="updateServiceForm" className="" ng-submit="update(openedService)">
                            <div className="mb-3">

                                <div className="mb-3">
                                    <label htmlFor="address" className="form-label">
                                        Nome do serviço
                                    </label>
                                    <input type="text" className="rounded-pill form-control" name="title"
                                        ng-model="openedService.title" ng-required="true" />
                                </div>

                                <div className="mb-3">
                                    <label className="perfilLabel">
                                        Categoria
                                    </label>
                                    <select className="rounded-pill form-select" name="category" ng-model="openedService.category">
                                        <option value="">Selecione</option>
                                        <option value="hair">Cabelo</option>
                                        <option value="nails">Unhas</option>
                                        <option value="eyebrows">Sobrancelhas</option>
                                        <option value="makeup">Maquiagem</option>
                                        <option value="spa">Spá</option>
                                        <option value="shaving">Depilação</option>
                                    </select>
                                </div>

                                <div className="mb-4">
                                    <label className="form-label">
                                        Valor
                                    </label>
                                    <input type="text" className="rounded-pill form-control" name="price"
                                        ng-model="openedService.price" ng-required="true" />
                                </div>
                            </div>

                            <div className="d-flex w-100 justify-content-end">
                                <button type="submit" className="btn btn-primary rounded-pill me-2"
                                    ng-disabled="updateServiceForm.$invalid">
                                    <span ng-show="!loading">Salvar</span>
                                    <span ng-show="loading">Salvando...</span>
                                </button>

                                <a href="" className="btn btn-secondary rounded-pill" data-bs-dismiss="modal" aria-label="Close">
                                    Cancelar
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        {/* <!-- DELETE SERVICE MODAL --> */}
        <div className="modal fade" id="deleteServiceModal" tabIndex="-1" aria-labelledby="deleteServiceModalLabel"
            aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="deleteServiceModalLabel">Excluir serviço</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p className="text-center mb-0">
                            Tem certeza que deseja excluir este anúncio?
                        </p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn rounded-pill btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                        <button type="button" ng-click="delete()" className="btn rounded-pill btn-danger">Excluir</button>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default AdsServices