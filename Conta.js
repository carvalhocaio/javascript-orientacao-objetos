import { Cliente } from './Cliente.js'

export class Conta {
  constructor (saldoInicial, cliente, agencia) {
    this._saldo = saldoInicial
    this._cliente = cliente
    this._agencia = agencia
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
    if (this._tipo === 'corrente') {
      taxa = 1.1
    }
    if (this._tipo === 'salario') {
      taxa = 1.05
    }
    if (this._tipo === 'empresarial') {
      taxa = 1.15
    }
    const valorSacado = taxa * valor
    if (this._saldo >= valorSacado) {
      this._saldo -= valorSacado
      return valorSacado
    }
  }

  depositar (valor) {
    this._saldo += valor
  }

  transferir (valor, conta) {
    const valorSacado = this.sacar(valor)
    conta.depositar(valorSacado)
  }
}