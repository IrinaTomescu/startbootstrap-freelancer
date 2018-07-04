var arrLang = {
    'en' : {
        'about' : 'About',
        'portfolio' : 'Portfolio',
        'exhibitions' : 'Exhibitions',
        'interviews' : 'Interviews',
        'contact' : 'Contact',



        'about_section' : 'I am inspired by everyday events in my life, by the people I meet; all are reflected through me into my canvas. \n' +
        'I choose paintings on large canvases that match the height of my viewers, I draw women with purpose being inspired from colors, people’s faces, and important events in my life. The impactful portraits artfully dodge and warp the male gaze, resulting in larger-than-life images of women with ambition , endlessly inspired by feelings and moments of familiarity. Large walls are not immune to my touch either, I also paint murals, glass, and found objects. \n' +
        'I prefer to paint on large surfaces and enjoy painting murals on a variety of materials including canvas, walls, and glass. I tend to paint with acrylics because they are very fluid and the colours are quite intense, allowing me to share my passion for colours in my creations and innovations.\n' +
        'My paintings give a vivid impression of continuous motion of the game thoughts and feelings within a pleasant symphony of metamorphosed colors. I wish to bring in the art of painting a new approach about image and space composition and a freshness full of sonority, giving to beauty a state of equilibrium by using a healthy chromatic and well chosen.\n' +
        'With a typical tone of vitality, I like to transform the objects that are vaguely observable into wonderful breathings that are sometimes translucent or abundant and strong which transforms dreams and aspirations into a gratifying and perceptible reality.\n' +
        'I hope that my paintings aptly share my ideas with the world and inspire people to focus on the positive things and to associate everything with colours influence in our lives.',
        'about_title' : 'About',


        'contact_title' : 'Contact Me',
        'contact_name' : 'Name',
        'contact_email' : 'Email Address',
        'contact_mail_danger' : 'Please enter your email address.',
        'contact_phone' : 'Phone Number',
        'contact_message' : 'Message',
        'contact_send' : 'Send',

        'portfoliu_title' : 'Portfolio',
        'exhibitions_title' : 'Exhibitions',
        'interviews_title' : 'Interviews',


    },

    'ro' : {
        'about' : 'Despre mine',
        'portfolio' : 'Portofoliu',
        'exhibitions' : 'Expozitii',
        'interviews' : 'Interviuri',
        'contact' : 'Contact',


        'about_section' : 'Sunt inspirata de evenimentele zilnice din viata mea, oamenii pe care ii cunosc sunt reflectati prin creativitatea mea si redati  pe panze.\n' +
        '\n' +
        'Aleg picturile pe panze de dimensiuni mari, care se potrivesc cu inaltimea privitorului , desenez femei cu teluri , scopuri , fiind inspirata de culori, fetele oamenilor si evenimente importante din viata  mea.\n' +
        '\n' +
        'Potretele cu impact si chipuri pline de maiestrie pot deforma mentalitatea  privitorilor de sex masculin, rezultand imagini mari ale unor femei cu ambitie fara incetare inspirate de sentimente si momente cruciale de familiarizare.\n' +
        '\n' +
        'Prefer sa pictez pe suprafete mari si sa ma bucur  si de picturile murale cu o varietate de materiale incluzand  pereti, panze si sticla. Am tendinta de a picta cu vopsea acrilica , deoarece este foarte fluida iar culorile sunt destul de intense permitandu-mi sa impartasesc pasiunea mea pentru culori in creatiile si inovatiile mele.\n' +
        '\n' +
        'Picturile mele redau o vie impresie de continua miscare a jocului de ganduri si de sentimente intr-o placuta simfonie coloristica metamorfozata. Doresc sa aduc in pictura o noua gandire a imaginii si a compozitiei spatiului ,  o prospetime plina de sonoritate, dand frumosului o stare de echilibru prin folosirea unei cromatici sanatoase , bine alese.\n' +
        '\n' +
        'Cu un tonus tipic unei cuceritoare vitalitati, sper sa reusesc  sa transform obiectele vag perceptibile in minunate respirari uneori diafane alteori dese , puternice , care transforma visele si aspiratiile intr-o imbucuratoare, palpabila realitate .\n' +
        '\n' +
        '\n' +
        'Sper ca picturile mele reusesc sa ofere ideile mele lumii , sa  inspire oamenii sa se focuseze pe lucrurile pozitive si sa asocieze totul sub influenta culorilor   in vietile noastre.\n',
        'about_title' : 'Despre mine',



        'contact_title' : 'Contacteaza-ma',
        'contact_name' : 'Nume',
        'contact_email' : 'Adresa de email',
        'contact_mail_danger' : 'Te rog adauga adresa de email',
        'contact_phone' : 'Numarul de telefon',
        'contact_message' : 'Mesaj',
        'contact_send' : 'Trimite',



        'portfoliu_title' : 'Portofoliu',
        'exhibitions_title' : 'Expozitii',
        'interviews_title' : 'Interviuri',


    }
};

$(function(){
    $('.translate').click(function () {
        var lang  = $(this).attr('id');
        $('.lang').each(function (index, element) {
            $(this).text(arrLang[lang][$(this).attr('key')]);
        });
    });
});