function RecoerCode() {
  return (
    <>
      <div class="p-4 bg-purple text-white" style={{ minHeight: 100 }}>
        <a href="/login">
          <img src="/assets/img/back.svg" alt="" />
        </a>

        <h4 class="text-uppercase text-center">Recuperar senha</h4>

        {/* Email */}
        <div ng-if="activeTab=='email'">
          <div class="forgotBox">
            <p class="forgotText text-center">
              Preencha o formulário abaixo com seu e-mail de cadastro.
            </p>

            <form
              name="recoverPasswordForm"
              ng-submit="email(recoverPasswordData)"
            >
              <label for="email" class="forgotLabel form-label">
                E-mail de cadastro
              </label>
              <div class="input-group mb-4">
                <input
                  type="email"
                  name="email"
                  ng-model="recoverPasswordData.email"
                  ng-required="true"
                  ng-class="{'is-valid' : recoverPasswordForm.email.$valid, 'is-invalid' : recoverPasswordForm.email.$invalid && recoverPasswordForm.email.$touched}"
                  class="rounded-pill form-control"
                  placeholder="Email"
                />
              </div>
              <button
                class="btn btn-light rounded-pill w-100"
                ng-disabled="recoverPasswordForm.$invalid"
              >
                <span ng-show="!loading">Enviar</span>
                <span ng-show="loading">Enviando...</span>
              </button>
            </form>
          </div>
        </div>

        {/* Código */}
        <div ng-if="activeTab=='code'">
          <div class="forgotBox">
            <p class="forgotText text-center">
              Foi enviado para seu e-mail de cadastro um código de verificação.
              Por favor, digite o código de 06 dígitos enviado:
            </p>

            <form name="confirmCodeForm" ng-submit="code(confirmCodeData)">
              <label for="code" class="forgotLabel form-label">
                Código de confirmação
              </label>

              <div class=" mb-4">
                <input
                  type="text"
                  name="code"
                  ng-model="confirmCodeData.code"
                  ng-required="true"
                  ng-class="{'is-valid' : confirmCodeForm.code.$valid, 'is-invalid' : confirmCodeForm.code.$invalid && confirmCodeForm.code.$touched}"
                  class="form-control rounded-pill"
                  placeholder="Código de confirmação"
                />
              </div>

              <button
                type="submit"
                class="btn btn-light rounded-pill w-100"
                ng-disabled="confirmCodeForm.$invalid "
              >
                <span ng-show="!loading">Verificar</span>
                <span ng-show="loading">Verificando...</span>
              </button>
            </form>
          </div>
        </div>

        {/* Senha */}
        <div ng-if="activeTab=='password'">
          <p class="forgotText text-center">
            Sua identidade foi confirmada, <br />
            redefina a senha de seua conta
          </p>

          <div class="forgotBox">
            <form name="updatePasswordForm" ng-submit="password(passData)">
              <div class="mb-4">
                <input
                  type="password"
                  id="updatePassInput"
                  name="password"
                  ng-model="passData.password"
                  ng-required="true"
                  ng-class="{ 'is-valid' : updatePasswordForm.password.$valid, 'is-invalid' : updatePasswordForm.password.$invalid && updatePasswordForm.password.$touched}"
                  class="rounded-pill form-control"
                  placeholder="Senha"
                />
              </div>

              <div class="mb-4">
                <input
                  type="password"
                  id="updatePassInput"
                  name="match"
                  ng-model="passData.match"
                  ng-required="true"
                  ng-class="{ 'is-valid' : updatePasswordForm.match.$valid, 'is-invalid' : updatePasswordForm.password.$match && updatePasswordForm.match.$touched}"
                  class="rounded-pill form-control"
                  placeholder="Confirmação de senha"
                />
              </div>

              <button
                type="submit"
                class="rounded-pill w-100"
                ng-disabled="updatePasswordForm.$invalid"
              >
                <span ng-show="!loading">Redefinir</span>
                <span ng-show="loading">Redefinindo...</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default RecoerCode;
