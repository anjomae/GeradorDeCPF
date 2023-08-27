export default class ValidaCPF {
    constructor(cpfEnviado){
        
        Object.defineProperty(this, 'cpflimpo',{
            writable: false,
            enumerable: true,
            configurable: false,
            value:  cpfEnviado.replace(/\D+/g, '')
        });
    }

    sequencial(){
        return this.cpflimpo.charAt(0).repeat(11) === this.cpflimpo;
    }

    gerarNovoCpf() {
        const CpfSD = this.cpflimpo.slice(0, -2);
        const digito1 = ValidaCPF.GeraDig(CpfSD);
        const digito2 = ValidaCPF.GeraDig(CpfSD + digito1);
        this.novoCPF = CpfSD + digito1 + digito2;
    }

   static GeraDig(CadastroPessoaFisica){
        let contador = 0;
        let tamanho = CadastroPessoaFisica.length + 1;

        for(let stringNumerica of CadastroPessoaFisica) {
            contador += tamanho * Number(stringNumerica);
            tamanho--;
        }
        const digito = 11 - (contador % 11);
        return digito <= 9 ? String(digito) : '0';
    }

    Valida(){
        if(!this.cpflimpo) return false;
        if(typeof this.cpflimpo !== 'string') return false;
        if(this.cpflimpo.length !== 11)return false;
        if(this.sequencial()) return false;
        this.gerarNovoCpf();
        console.log (this.novoCPF === this.cpflimpo);
        return this.novoCPF === this.cpflimpo;
    }
}