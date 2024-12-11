import { ContaCorrente, ContaPoupanca } from "./ContaBancaria";

const contaCorrente = new ContaCorrente("12345-6", 1000, 500);
const contaPoupanca = new ContaPoupanca("54321-0", 2000);

console.log("Conta Corrente:");
console.log(`Número: ${contaCorrente.numeroConta}`);
console.log(`Saldo Inicial: ${contaCorrente.saldo}`);
console.log(`Cheque Especial: ${contaCorrente.chequeEspecial}`);

contaCorrente.depositar(200);
console.log(`Saldo após depósito: ${contaCorrente.saldo}`);

contaCorrente.sacar(300);
console.log(`Saldo após saque: ${contaCorrente.saldo}`);

contaCorrente.usarChequeEspecial(100);
console.log(`Saldo após uso do cheque especial: ${contaCorrente.saldo}`);
console.log(`Cheque Especial Restante: ${contaCorrente.chequeEspecial}`);

console.log("\nConta Poupança:");
console.log(`Número: ${contaPoupanca.numeroConta}`);
console.log(`Saldo Inicial: ${contaPoupanca.saldo}`);

contaPoupanca.calcularJuros(5); // Aplica 5% de juros
console.log(`Saldo após cálculo de juros: ${contaPoupanca.saldo}`);