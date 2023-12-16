import { render, RenderPosition } from "./render.js";
import { FilmComponent} from "./components/film-conponent.js";
import { MusicComponent } from "./components/music-component.js";
import { MagazinComponent } from "./components/magazin-component.js";
import { BooksComponent } from "./components/books-component.js";

const conteiner = document.querySelector('.tabs');
const Button = document.querySelectorAll('.tab-button')
const filmComponent = new FilmComponent();
const musicComponent = new MusicComponent();
const booksComponent = new BooksComponent();
const magazinComponent = new MagazinComponent();

for(let i = 0; i < Button.length; i++){
    Button[i].addEventListener('click', function(){
        const attributeData = Button[i].getAttribute('data-for-tab');

        filmComponent.getElement().remove();
        musicComponent.getElement().remove();
        booksComponent.getElement().remove();
        magazinComponent.getElement().remove();

        Button[0].classList.remove("active");
        Button[1].classList.remove("active");
        Button[2].classList.remove("active");
        Button[3].classList.remove("active");

        if(attributeData==1){
            render(filmComponent, conteiner);
            Button[i].classList.add("active")
        }
        if(attributeData==2){
            render(musicComponent, conteiner);
            Button[i].classList.add("active")
        }
        if(attributeData==3){
            render(booksComponent, conteiner);
            Button[i].classList.add("active")
        }
        if(attributeData==4){
            render(magazinComponent, conteiner);
            Button[i].classList.add("active")
        }
    });
}
// render(new FilmComponent(), conteiner);
// render(new MusicComponent(), conteiner);
// render(new BooksComponent(), conteiner);
// render(new MagazinComponent(), conteiner);