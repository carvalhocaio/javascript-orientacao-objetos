import { Cliente } from './Cliente.js'

export class Conta {
  constructor (saldoInicial, cliente, agencia) {
    this._saldo = saldoInicial
    this._cliente = cliente
    this._agencia = agencia

    if(this.constructor === Conta){
      console.log('Você não deveria instanciar um objeto do tipo conta!')
    }
  }

  get cliente () {
    return this._cliente
  }

  set cliente (novoValor) {
    if (novoValor instanceof Cliente) {
      this._cliente = novoValor
    }
  }

  get saldo () {
    return this._saldo
  }

  sacar (valor) {
    let taxa = 1
    return this._sacar(valor, taxa)
  }

  _sacar (valor, taxa) {
    const valorSacado = taxa * valor
    if (this._saldo >= valorSacado) {
      this._saldo -= valorSacado
      return valorSacado
    }

    return 0;
  }

  depositar (valor) {
    this._saldo += valor
  }

  transferir (valor, conta) {
    const valorSacado = this.sacar(valor)
    conta.depositar(valorSacado)
  }
}