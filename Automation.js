//JS advanced commands

$ = "document.querySelector"

window.location.href = 'https://example.com' // ide na definisanu adresu

document.querySelector("body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.FPdoLc.lJ9FBc > center > input.gNO89b").click; // Klikce na definisan element

document.querySelector("#APjFqb").value = '123'; // Dodeljuje vrednos elementu (u ovom slucaju popunjava text field sa vrednoscu 123)

window.history.forward(); // Ide na stranu unapred (klik na strelicu u desno u gornjem levom uglu)

window.history.back(); // Ide na stranu unazad (klik na strelicu u levo u gornjem levom uglu)

window.open('https://example.com','_blank'); // Otvara novi tab sa navedenim linkom

$("#milšped-group-portal").innerText = 'Luka'; // Menja sam elemenat (u ovom slucaju daje mu novi naziv luka)

$("#milšped-group-portal").style.padding = '50px'; // ".style" menja sam izgled stranice (u ovom primeru se povecava padding za 50px)

window.scrollTo(0,0) // Scroll do pocetka stranice

$("#milšped-group-portal").scrollIntoView() // Skroluje elemena tako da vude vidljim

window.location.reload(); // refresuje stranicu

document.querySelectorAll('*').forEach(element => {
    if (element.textContent.trim() === 'Pretraga') {
        element.click();            // Klikne na element       //-Klikce na svaki elemenat na stranici koji u sebi sadrzi rec pretraga.
    }
});	

document.querySelectorAll('*').forEach(element => {
    // Proverava da li element sadrži tekst "Pretraga"
    if (element.textContent.trim() === 'Pretraga') {
        console.log('Klikćem na:', element);
        element.style.border = 'thick double #32a1ce';  //-Klikce na svaki elemenat na stranici koji u sebi sadrzi rec pretraga i stavlja dupli border plave boje.
        element.style.bordercolor = 'blue';
        element.click(); // Klikne na element
    }
});	

$('input[type = password]').value = '123'; // gadja elemenat koji je tipa 'input' i prihavata tip podatka 'password'

$('[class*="btn btn-prim"]');   //* vraca elemente koji u sebi sadrze odredjene klase, id-ijeve i slicno (orginalni element "$('[class="btn btn-primary"]')")

$('[class^="btn btn-pr"]');    //^ vraca elemnt koji pocinje sa definisanim atrubutima("Starts with").

$('[class$="primary"]');    //$ vraca element koji se zavrsava sa navedinim atributom ("Ends with").

$x('/html/body/app/ng-component/div/div/form/div[2]/input')[0].value = 'rpa.user1'; // Da bi js klikno na elemenat ili mu dodelio neku vrednos potrebno je da stoji "x" posle "document.querySelector", takodje je neophodno da nakon definisanog xPatha-a se definise redni broj indexa eleneta u xPath-u, sto znaci da js gleda xPath kao niz. U ovom slucaju uzimamo prvi elementak xPath-a (niza)

$x('//*[@class="btn btn-primary"]');    //Vraca elemenat pomocu xPath-a sa klasom "btn btn-primary"

$x('//*/form[@class="ng-pristine ng-valid ng-touched"]/button');    //Na ovaj nacin je moguce prstupiti svim childe elementima s tim sto ako se definise klasa ili id od chlde elementa nije potrebno (moguce) stafiti parent element.

/*Primer*/ $x('//*/form[@class="ng-pristine ng-valid ng-touched"]/button'); // $x('//*/form/[@class="btn btn-primary"]') *Ne validana sintaksa jer parentu nije definisan nijedan atribut*

$x('//*/form[@class="ng-pristine ng-valid ng-touched"]//button');   //Kada je u xPath-u putanja do nekog elementa definisana sa 2 kose crte '//' znaci da vraca svu decu odredjenog elementa (u ovom slucaju svu decu tipa button).

$x('//*/form[@class="ng-pristine ng-valid ng-touched"]/button[@class="btn btn-primary"]/following-sibling::button[1]'); ///following-sibling::button[1] je funkcija koja vraca brata direktong elementa u ovom slucaju elemenat button sa indeksom 1.

/*Primer*/  $x('//*/div[@class="form-group form-group-sm col-md-3"]/following-sibling::div[0]');

$x('//button[contains(text(), "XLS")]');    //Funkcija "[contains(text(), "nest")]" vraca element koji u sebi sadrzi odredjeni tekst.

$x('//a[contains(@href, "document")]');   //Funkcija [contains(@href, "")] vraca elemnt koji u svom linku sadrzi definisanu rec.

$x('//a[contains(@class, "logo")]');    //*UZ FUNKCIJU "CONTAINS" TREBA DEFINISATI TIP ATRIBUTA KOJI SE GADAJ U OVOM SLUCAJU "Class" TAKO DA JE FUNCIJA JAKO FLEKSIBILA SA RAZLICITIM TIPOVIMA ATRIBUTA*/

$x('//button[starts-with(text(), " Izveštaj")]');   //[starts-with(text(), "")]') je funkcija koja vraca elemente koji pocinju definisanim tekstom.

$x('//*[(text() = "Pretraga")]');   //Vraca sve elemente koji u sbi sadrze tekst petraga.

$x('//*[(text() = "Pretraga")]/..');    //Funkcija /.. vraca parenta od elektovanog elementa.


