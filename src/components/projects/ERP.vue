<template>
    <div class="container mx-auto p-4 h-auto mt-12">

        <div class="surface-section px-4 py-8 md:px-6 lg:px-8">
            <div class="w-full lg:hidden">
                <div class="text-900 text-3xl font-medium">Feature Title</div>
                <p class="text-600 text-xl line-height-3 mb-6">Vulputate eu scelerisque felis imperdiet proin. Eget arcu
                    dictum varius duis at consectetur lorem donec.</p>
            </div>
            <div class="grid justify-content-center flex-column lg:flex-row">
                <div class="col-12 lg:col-6 py-4 lg:pr-4 flex-order-2 lg:flex-order-1">
                    <div class="w-full hidden lg:block">
                        <div class="text-900 text-3xl font-medium">Feature Title</div>
                        <p class="text-600 text-xl line-height-3 mb-6">Vulputate eu scelerisque felis imperdiet proin.
                            Eget arcu dictum varius duis at consectetur lorem donec.</p>
                    </div>
                    <div class="flex px-5 py-2">
                        <i class="pi pi-wallet text-4xl font-bold text-900"></i>
                        <div class="ml-5">
                            <div class="text-900 font-medium text-2xl">Eu non diam phasellus</div>
                            <p class="text-700">Vulputate eu scelerisque felis imperdiet proin. Eget arcu dictum varius
                                duis at consectetur lorem donec.</p>
                        </div>
                    </div>
                    <div class="flex px-5 py-2">
                        <i class="pi pi-video text-4xl font-bold text-900"></i>
                        <div class="ml-5">
                            <div class="text-900 font-medium text-2xl">Imperdiet proin fermentum</div>
                            <p class="text-700">Consectetur lorem donec massa sapien faucibus et molestie.</p>
                        </div>
                    </div>
                    <div class="flex px-5 py-2">
                        <i class="pi pi-tags text-4xl font-bold text-900"></i>
                        <div class="ml-5">
                            <div class="text-900 font-medium text-2xl">Est ullamcorper eget</div>
                            <p class="text-700">Eget arcu dictum varius duis at consectetur lorem donec. Semper viverra
                                nam libero justo laoreet sit amet cursus sit. </p>
                        </div>
                    </div>
                </div>
                <div class="col-12 lg:col-6 flex-order-1 lg:flex-order-2">
                    <img src="" class="border-round w-full" alt="product" />
                </div>
            </div>
        </div>
        <section class="mb-8">
            <h1 class="text-4xl font-bold text-center mb-4">Aufgabenstellung</h1>
            <p class="text-lg text-justify">
                Verlangt wurde, dass wir unsere Kenntnisse aus den Modulen 114, 210 und 426 vertiefen.
            </p>
            <p class="text-lg text-justify">
                Wir haben uns entschieden, die Theorie aus dem Modul 426 "Software mit agilen Methoden entwickeln"
                anzuwenden.
            </p>
            <p class="text-lg text-justify">
                Somit haben sich Giuliano Martullo, Mirhan Özden, Lukas Heiniger und ich in einem Team
                zusammengeschlossen und Babacus als Projekt bestimmt.
            </p>
            <p class="text-lg text-justify">
                Unser Team teilte sich in zwei Gruppen auf, um die Effizienz zu steigern:
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <h2 class="text-2xl font-semibold">Frontend:</h2>
                    <ul class="list-disc pl-5">
                        <li>Mirhan Özden</li>
                        <li>Lukas Heiniger</li>
                    </ul>
                </div>
                <div>
                    <h2 class="text-2xl font-semibold">Backend:</h2>
                    <ul class="list-disc pl-5">
                        <li>Giuliano Martullo</li>
                        <li>Giovanni Innamorato (ich)</li>
                    </ul>
                </div>
            </div>
            <p class="text-lg text-justify">
                Die Scrum-Rollen haben wir wie folgt zugeteilt:
            </p>
            <ul class="list-disc pl-5">
                <li><strong>Product Owner:</strong> Mirhan</li>
                <li><strong>Scrum Master:</strong> Giovanni</li>
                <li><strong>Entwicklungsteam:</strong> Giovanni, Giuliano, Lukas, Mirhan</li>
            </ul>
        </section>

        <section class="mb-8">
            <h1 class="text-4xl font-bold text-center mb-4">Ziele</h1>
            <p class="text-lg text-justify">
                Für das Projekt waren meine persönlichen Ziele:
            </p>
            <ul class="list-disc pl-5">
                <li>SCRUM kennenlernen in der Praxis</li>
                <li>Zusammenarbeit und Aufgabenteilung zu fördern</li>
            </ul>
        </section>

        <section class="mb-8">
            <h1 class="text-4xl font-bold text-center mb-4">Babacus</h1>
            <p class="text-lg text-justify">
                Ein ERP (Enterprise Resource Planning) ist eine Software für Unternehmen, die für die Buchhaltung und
                viele andere Aufgaben gedacht ist.
            </p>
            <p class="text-lg text-justify">
                Wir haben uns entschieden, uns nur auf die Eintragung von verkauften und eingekauften Produkten zu
                konzentrieren, um den Rahmen möglichst klein zu halten. Denn ein ERP zu entwickeln kann sehr schnell
                sehr kompliziert und aufwendig werden.
            </p>
            <p class="text-lg text-justify">
                Als imaginären Kunden haben wir einen Kiosk bestimmt. Dieser möchte eine Software, in der er seine
                Verkäufe eintragen kann, inklusive Preis, Menge und Art der Bezahlung.
            </p>
            <p class="text-lg text-justify">
                Die User-Stories und das gesamte Projekt findet Ihr auf GitHub <a
                    href="https://github.com/dein-repository-link" class="text-blue-600 underline">hier</a>.
            </p>
            <p class="text-lg text-justify">
                Für die Entwicklung von Babacus haben sich folgende Technologien als optimal gezeigt:
            </p>
            <ul class="list-disc pl-5">
                <li>Postman: Perfekt für die API-Calls und zum Testen der API.</li>
                <li>Vite: Ein Tool zum schnellen Aufbau von Frontend-Projekten.</li>
                <li>React JS: Ein Framework für das Frontend.</li>
                <li>C#: Die verwendete Sprache für die API.</li>
                <li>MSSQL: Die Datenbank für die App.</li>
                <li>GitHub: Optimal für die Nutzung von Git und den Austausch von Code.</li>
            </ul>
        </section>

        <section class="mb-8">
            <h1 class="text-4xl font-bold text-center mb-4">Reflexion</h1>
            <p class="text-lg text-justify">
                Wir haben anfangs zusammen den groben Ablauf des Projekts besprochen. Wir konnten die Aufgaben gut
                untereinander aufteilen. Am Anfang des Projekts waren wir alle noch nicht sehr vertraut mit der Nutzung
                von Git und GitHub im Team. Im Nachhinein habe ich jedoch ein sehr gutes Gefühl, dass wir alle viel
                dazugelernt haben. Das sieht man auch in der Commit-History: Mit der Zeit wurde es weniger chaotisch,
                und die Einhaltung der Grundkonzepte von Git wurde beachtet.
            </p>
            <p class="text-lg text-justify">
                Anfangs habe ich dem Team Postman genauer vorgestellt und beschlossen, dass meine Gruppe (Backend) eine
                API-Call-Library in Postman erstellen würde, die die von uns implementierten Aufrufe enthalten sollte.
                Die Idee war, dass wir im Backend unsere Funktionen anhand dieser Aufrufe funktionsfähig machen und das
                Frontend anhand dieser API-Aufrufe die Webapp gestalten könnte. Der Aufwand am Anfang war groß, da wir
                von Anfang an eine Architektur der App entwerfen mussten, ohne zu wissen, ob das überhaupt so
                implementiert werden kann. Schlussendlich war die Mühe doch nicht umsonst, denn beide Gruppen konnten so
                unabhängig voneinander arbeiten und davon ausgehen, dass ihre Implementierung funktionieren würde. Es
                konnte als Interface betrachtet werden.
            </p>
            <p class="text-lg text-justify">
                Doch im Verlauf des Projekts wurde uns ein großer Fehler bei dieser Herangehensweise bewusst. Wir haben
                es am Anfang zu weit und komplex implementiert. Das hatte zur Folge, dass wir lange brauchten, um diese
                Aufrufe senden und empfangen zu können, und wir konnten in der Zwischenzeit die App nicht auf
                Kompatibilität und Funktion testen. Wir haben herausgefunden, dass es besser gewesen wäre, die API-Calls
                nur schrittweise festzulegen: also anfangs einfach zu halten, dann auf Funktionsfähigkeit zu prüfen und
                danach die API-Calls zu erweitern.
            </p>
            <p class="text-lg text-justify">
                Ansonsten lief die Implementierung ziemlich reibungslos.
            </p>
        </section>

        <section class="mb-8">
            <h1 class="text-4xl font-bold text-center mb-4">Verifizierung</h1>
            <p class="text-lg text-justify">
                Auf GitHub kann man die verschiedenen Sprints sehen. Leider haben wir uns nicht immer an die täglichen
                Scrum-Meetings gehalten und diese wurden öfter vernachlässigt. Nichtsdestotrotz konnten wir erfolgreich
                einen ersten Sprint durchführen und haben am Ende des Sprints ein Produkt, das dem Product Owner gezeigt
                werden kann. Somit kann ich bestätigen, dass wir Scrum gut in der Praxis kennenlernen durften und
                wichtige Lektionen gelernt haben.
            </p>
            <p class="text-lg text-justify">
                Das ist uns gut gelungen. Wie beschrieben, haben wir uns in zwei Gruppen aufgeteilt und die User-Stories
                untereinander aufgeteilt.
            </p>
        </section>
    </div>
</template>

<script>
export default {
    name: 'PortfolioBeitrag',
};
</script>

<style scoped></style>