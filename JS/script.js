document.addEventListener('DOMContentLoaded', () => {
    const elementos = document.querySelectorAll('.elemento');
    const tooltip = document.getElementById('tooltip');
    const imageContainer = document.getElementById('element-image-conteiner');
    const elementImage = document.getElementById('element-image');

    elementos.forEach(elemento => {
        elemento.addEventListener('mouseover', (e) => {
            const nome = elemento.getAttribute('data-name');
            const numero = elemento.getAttribute('data-number');
            const peso = elemento.getAttribute('data-weight');
            const imageUrl = elemento.getAttribute('data-image');
            
            tooltip.innerHTML = `<strong>${nome}</strong><br>Número Atômico: ${numero}<br>Massa Atômica: ${peso}`;
            tooltip.style.display = 'block';
            tooltip.style.left = `${e.pageX + 10}px`;
            tooltip.style.top = `${e.pageY + 10}px`;
        
        
        if (imageUrl) { 
            elementImage.src = imageUrl;
            elementImage.style.display = 'block';
            imageContainer.style.display = 'flex';
            
        }
    });

        elemento.addEventListener('mouseout', () => {
            tooltip.style.display = 'none';
            elementImage.style.display = 'none';
        });

        elemento.addEventListener('click', () => {
            const simbolo = elemento.getAttribute('data-symbol');
            let url = '';

            switch (simbolo) {
                case 'H':
                    url = 'https://pt.wikipedia.org/wiki/Hidrog%C3%A9nio';
                    break;
                case 'He':
                    url = 'https://pt.wikipedia.org/wiki/H%C3%A9lio'
                    break;
                case 'Li':
                    url = ' https://pt.wikipedia.org/wiki/L%C3%ADtio'
                    break;
                case 'Be':
                    url = ' https://pt.wikipedia.org/wiki/Ber%C3%ADlio'
                    break;
                case 'B':
                    url = ' https://pt.wikipedia.org/wiki/Boro'
                    break;
                case 'C':
                    url = ' https://pt.wikipedia.org/wiki/Carbono' 
                    break;
                case 'N':
                    url = ' https://pt.wikipedia.org/wiki/Nitrog%C3%A9nio'
                    break;
                case 'O':
                    url = ' https://pt.wikipedia.org/wiki/Oxig%C3%A9nio'
                    break;
                case 'F':
                    url = ' https://pt.wikipedia.org/wiki/Fl%C3%BAor'
                    break;
                case 'Ne':
                    url = ' https://pt.wikipedia.org/wiki/Ne%C3%B3nio'
                    break;
                case 'Na':
                    url = ' https://pt.wikipedia.org/wiki/S%C3%B3dio'
                    break;
                case 'Mg':
                    url = ' https://pt.wikipedia.org/wiki/Magn%C3%A9sio'
                    break;
                case 'Al':
                     url =  'https://pt.wikipedia.org/wiki/Alum%C3%ADnio'
                    break;
                case 'Si':
                    url = ' https://pt.wikipedia.org/wiki/Sil%C3%ADcio'
                    break;
                case 'P':
                    url = ' https://pt.wikipedia.org/wiki/F%C3%B3sforo'
                    break;
                case 'S':
                    url = 'https://pt.wikipedia.org/wiki/Enxofre'
                    break;
                case 'Cl':
                    url = ' https://pt.wikipedia.org/wiki/Cloro'
                    break;
                case 'Ar':
                    url = ' https://pt.wikipedia.org/wiki/Arg%C3%B3nio'
                    break;
                case 'K':
                    url = ' https://pt.wikipedia.org/wiki/Pot%C3%A1ssio'
                    break;
                case 'Ca':
                    url = ' https://pt.wikipedia.org/wiki/C%C3%A1lcio'
                    break;
                case 'Sc':
                    url = ' https://pt.wikipedia.org/wiki/Esc%C3%A2ndio'
                    break;
                case 'Ti':
                    url = ' https://pt.wikipedia.org/wiki/Tit%C3%A2nio'
                    break;
                case 'V':
                    url = ' https://pt.wikipedia.org/wiki/Tit%C3%A2nio'
                    break;
                case 'Cr':
                    url = ' https://pt.wikipedia.org/wiki/Cromo'
                    break;
                case 'Mn':
                    url = ' https://pt.wikipedia.org/wiki/Mangan%C3%AAs' 
                    break;
                case 'Fe':
                    url = ' https://pt.wikipedia.org/wiki/Ferro'
                    break;
                case 'Co':
                    url = ' https://pt.wikipedia.org/wiki/Cobalto'
                    break;
                case 'Ni':
                    url = ' https://pt.wikipedia.org/wiki/N%C3%ADquel' 
                    break;
                case 'Cu':
                    url = ' https://pt.wikipedia.org/wiki/Cobre'
                    break;
                case 'Zn':
                    url = ' https://pt.wikipedia.org/wiki/Zinco'
                    break;
                case 'Ga':
                    url = ' https://pt.wikipedia.org/wiki/G%C3%A1lio'
                    break;
                case 'Ge':
                    url = 'https://pt.wikipedia.org/wiki/Germ%C3%A2nio'
                    break;
                case 'As':
                    url = ' https://pt.wikipedia.org/wiki/Ars%C3%AAnio'
                    break;
                case 'Se':
                    url = ' https://pt.wikipedia.org/wiki/Sel%C3%AAnio'
                    break;
                case 'Br':
                    url = ' https://pt.wikipedia.org/wiki/Bromo'
                    break;
                case 'Kr':
                    url = ' https://pt.wikipedia.org/wiki/Cript%C3%B4nio'
                    break;
                case 'Rb':
                    url = ' https://pt.wikipedia.org/wiki/Rub%C3%ADdio'
                    break;
                case 'Sr':
                    url = ' https://pt.wikipedia.org/wiki/Estr%C3%B3ncio'
                    break;
                case 'Y':
                    url = ' https://pt.wikipedia.org/wiki/%C3%8Dtrio'
                    break;
                case 'Zr':
                    url = 'https://pt.wikipedia.org/wiki/Zirc%C3%B4nio'
                    break;
                case 'Nb':
                    url = ' https://pt.wikipedia.org/wiki/Ni%C3%B3bio'
                    break;
                case 'Mo':
                    url = ' https://pt.wikipedia.org/wiki/Molibd%C3%A9nio'
                    break;
                case 'Tc':
                    url = 'https://pt.wikipedia.org/wiki/Tecn%C3%A9cio'
                    break;
                case 'Ru':
                    url = ' https://pt.wikipedia.org/wiki/Rut%C3%A9nio'
                    break;
                case 'Rh':
                    url = ' https://pt.wikipedia.org/wiki/R%C3%B3dio'
                    break;
                case 'Pd':
                    url = ' https://pt.wikipedia.org/wiki/Pal%C3%A1dio'
                    break;
                case 'Ag':
                    url = ' https://pt.wikipedia.org/wiki/Prata'
                    break;
                case 'Cd':
                    url = ' https://pt.wikipedia.org/wiki/C%C3%A1dmio'
                    break;
                case 'In':
                    url = ' https://pt.wikipedia.org/wiki/%C3%8Andio'
                    break;
                case 'Sn':
                    url = ' https://pt.wikipedia.org/wiki/Estanho'
                    break;
                case 'Sb':
                    url = 'https://pt.wikipedia.org/wiki/Antim%C3%B3nio'
                    break;
                case 'Te':
                    url = ' https://pt.wikipedia.org/wiki/Tel%C3%BArio'
                    break;
                case 'I':
                    url = ' https://pt.wikipedia.org/wiki/Iodo'
                    break;
                case 'Xe':
                    url = ' https://pt.wikipedia.org/wiki/Xen%C3%B3nio'
                    break;
                case 'Cs':
                    url = ' https://pt.wikipedia.org/wiki/C%C3%A9sio'
                    break;
                case 'Ba':
                    url = ' https://pt.wikipedia.org/wiki/B%C3%A1rio'
                    break;
                case 'La':
                    url = 'https://pt.wikipedia.org/wiki/Lant%C3%A2nio'
                    break;
                case 'Ce':
                    url = ' https://pt.wikipedia.org/wiki/C%C3%A9rio'
                    break;
                case 'Pr':
                    url = ' https://pt.wikipedia.org/wiki/Praseod%C3%ADmio'
                    break;
                case 'Nd':
                    url = 'https://pt.wikipedia.org/wiki/Neod%C3%ADmio'
                    break;
                case 'Pm':
                    url = ' https://pt.wikipedia.org/wiki/Prom%C3%A9cio'
                    break;
                case 'Sm':
                    url = 'https://pt.wikipedia.org/wiki/Sam%C3%A1rio'
                    break;
                case 'Eu':
                    url = ' https://pt.wikipedia.org/wiki/Eur%C3%B3pio'
                    break;
                case 'Gd':
                    url = ' https://pt.wikipedia.org/wiki/Gadol%C3%ADnio'
                    break;
                case 'Tb':
                    url = ' https://pt.wikipedia.org/wiki/T%C3%A9rbio'
                    break;
                case 'Dy':
                    url = 'https://pt.wikipedia.org/wiki/Dispr%C3%B3sio'
                    break;
                case 'Ho':
                    url = ' https://pt.wikipedia.org/wiki/H%C3%B3lmio'
                    break;
                case 'Er':
                    url = ' https://pt.wikipedia.org/wiki/%C3%89rbio'
                    break;
                case 'Tm':
                    url = ' https://pt.wikipedia.org/wiki/T%C3%BAlio'
                    break;
                case 'Yb':
                    url = 'https://pt.wikipedia.org/wiki/It%C3%A9rbio'
                    break;
                case 'Lu':
                    url = 'https://pt.wikipedia.org/wiki/Lut%C3%A9cio'
                    break;
                case 'Hf':
                    url = 'https://pt.wikipedia.org/wiki/H%C3%A1fnio'
                    break;
                case 'Ta':
                    url = ' https://pt.wikipedia.org/wiki/T%C3%A2ntalo'
                    break;
                case 'W':
                    url = ' https://pt.wikipedia.org/wiki/Tungst%C3%AAnio'
                    break;
                case 'Re':
                    url = ' https://pt.wikipedia.org/wiki/R%C3%A9nio'
                    break;
                case 'Os':
                    url = 'https://pt.wikipedia.org/wiki/%C3%93smio'
                    break;
                case 'Ir':
                    url = ' https://pt.wikipedia.org/wiki/Ir%C3%ADdio'
                    break;
                case 'Pt':
                    url = ' https://pt.wikipedia.org/wiki/Platina' 
                    break;
                case 'Au':
                    url = ' https://pt.wikipedia.org/wiki/Ouro'
                    break;
                case 'Hg':
                    url = 'https://pt.wikipedia.org/wiki/Merc%C3%BArio_(elemento_qu%C3%ADmico)'
                    break;
                case 'Tl':
                    url = ' https://pt.wikipedia.org/wiki/T%C3%A1lio'
                    break;
                case 'Pb':
                    url = ' https://pt.wikipedia.org/wiki/Chumbo'
                    break;
                case 'Bi':
                    url = ' https://pt.wikipedia.org/wiki/Bismuto'
                    break;
                case 'Po':
                    url = ' https://pt.wikipedia.org/wiki/Pol%C3%B4nio'
                    break;
                case 'At':
                    url = ' https://pt.wikipedia.org/wiki/Astato'
                    break;
                case 'Rn':
                    url = ' https://pt.wikipedia.org/wiki/Rad%C3%B4nio'
                    break;
                case 'Fr':
                    url = ' https://pt.wikipedia.org/wiki/Fr%C3%A2ncio'
                    break;
                case 'Ra':
                    url = ' https://pt.wikipedia.org/wiki/R%C3%A1dio'
                    break;
                case 'Ac':
                    url = 'https://pt.wikipedia.org/wiki/Act%C3%ADnio'
                    break;
                case 'Th':
                    url = ' https://pt.wikipedia.org/wiki/T%C3%B3rio'
                    break;
                case 'Pa':
                    url= ' https://pt.wikipedia.org/wiki/Protact%C3%ADnio' 
                    break;
                case 'U':
                    url = 'https://pt.wikipedia.org/wiki/Ur%C3%A2nio'
                    break;
                case 'Np':
                    url = ' https://pt.wikipedia.org/wiki/Net%C3%BAnio'
                    break;
                case 'Pu':
                    url = 'https://pt.wikipedia.org/wiki/Plut%C3%B4nio'
                    break;
                case 'Am':
                    url = ' https://pt.wikipedia.org/wiki/Amer%C3%ADcio'
                    break;
                case 'Cm':
                    url = ' https://pt.wikipedia.org/wiki/C%C3%BArio'
                    break;
                case 'Bk':
                    url = ' https://pt.wikipedia.org/wiki/Berqu%C3%A9lio'
                    break;
                case 'Cf':
                    url = 'https://pt.wikipedia.org/wiki/Calif%C3%B3rnio'
                    break;
                case 'Es':
                    url = 'https://pt.wikipedia.org/wiki/Einsteinio'
                    break;
                case 'Fm':
                    url = ' https://pt.wikipedia.org/wiki/F%C3%A9rmio'
                    break;
                case 'Md':
                    url = 'https://pt.wikipedia.org/wiki/Mendel%C3%A9vio'
                    break;
                case 'No':
                    url = ' https://pt.wikipedia.org/wiki/Nob%C3%A9lio'
                    break;
                case 'Lr':
                    url = 'https://pt.wikipedia.org/wiki/Laur%C3%AAncio'
                    break;
                case 'Rf':
                    url = ' https://pt.wikipedia.org/wiki/Rutherf%C3%B3rdio'
                    break;
                case 'Db':
                    url = ' https://pt.wikipedia.org/wiki/D%C3%BAbnio'
                    break;
                case 'Sg':
                    url ='https://pt.wikipedia.org/wiki/Seab%C3%B3rgio' 
                    break;
                case 'Bh':
                    url = ' https://pt.wikipedia.org/wiki/B%C3%B3hrio'
                    break;
                case 'Hs':
                    url = ' https://pt.wikipedia.org/wiki/H%C3%A1ssio' 
                    break;
                case 'Mt':
                    url = ' https://pt.wikipedia.org/wiki/Meitn%C3%A9rio' 
                    break;
                case 'Ds':
                    url = ' https://pt.wikipedia.org/wiki/Darmst%C3%A1dio' 
                    break;
                case 'Rg':
                    url= ' https://pt.wikipedia.org/wiki/Roentg%C3%AAnio' 
                    break;
                case 'Cn':
                    url = ' https://pt.wikipedia.org/wiki/Copern%C3%ADcio' 
                    break;
                case 'Nh':
                    url =  'https://pt.wikipedia.org/wiki/Nih%C3%B3nio'
                    break;
                case 'Fl':
                    url = ' https://pt.wikipedia.org/wiki/Fler%C3%B3vio'
                    break;
                case 'Mc':
                    url = ' https://pt.wikipedia.org/wiki/Mosc%C3%B3vio'
                    break;
                case 'Lv':
                    url = ' https://pt.wikipedia.org/wiki/Liverm%C3%B3rio'
                    break;
                case 'Ts':
                    url = 'https://pt.wikipedia.org/wiki/Tenessino'
                    break;
                case 'Og':
                    url = ' https://pt.wikipedia.org/wiki/Oganess%C3%B3nio'
                    break;
                
                default:
                    url = elemento.getAttribute('data-url'); 
                    break;
            }

            if (url) {
                window.open(url, '_blank');
            }
        });
    });
});
