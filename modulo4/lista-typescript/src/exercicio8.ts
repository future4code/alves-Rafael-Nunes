    function verificaRegistro(anoAtual:number, emitido:number, nascido:number){
      const idade:number = anoAtual - nascido
      const precisaRenovar:number = anoAtual - emitido
      if
      (idade <= 20){
        return precisaRenovar >= 5 ? true : false
      }else if
      (idade >= 20 && idade <= 50){
        return precisaRenovar >= 10 ? true : false
      }else if(idade >= 50){
        return precisaRenovar >= 15 ? true : false
      }else{
        return 'confira se os dados inseridos estão corretos'
      }
  }

  console.log('false = não precisa renovar')
  console.log('true = precisa renovar')
  console.log('33 anos',verificaRegistro(2022, 2011, 1989))
  console.log('19 anos',verificaRegistro(2022, 2018, 2003))
  console.log('52 anos', verificaRegistro(2022, 2005, 1970))