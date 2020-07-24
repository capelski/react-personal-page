import React from 'react';
import { ArticleContent } from '../article-data';
import { ArticleId } from '../article-id';
import { ArticleImage } from '../article-image';

export const catalan: ArticleContent = {
    title: 'Un algoritme de sudokus',
    description: 'Tot el que necessites saber per construir un generador de sudokus',
    introduction: (
        <p>
            La meva mare sempre ha estat una lectora fervent de diaris i, amb els anys, ha cultivat
            l'afició de completar els jocs que els diaris inclouen a les últimes pàgines. Entre
            aquests jocs sempre se n'hi troba un anomenat{' '}
            <a href="https://en.wikipedia.org/wiki/Sudoku" target="_blank">
                sudoku
            </a>
            . Dos de fet; un de dificultat raonable i un de completament malvat. Va ser mentre ella
            estava enfeinada resolent el primer sudoku que la vaig interrompre. No recordo que volia
            en aquell moment, però si que recordo que vam parlar de sudokus i que em va cridar
            l'atenció la diferència de dificultat entre els dos nivells.
        </p>
    ),
    body: (
        <React.Fragment>
            <div className="screen-splitter">
                <ArticleImage
                    articleId={ArticleId.sudokuGeneration}
                    alt="Easy sudoku"
                    filename="easy-sudoku.png"
                    footer="Sudoku fàcil"
                />
                <ArticleImage
                    articleId={ArticleId.sudokuGeneration}
                    alt="Hard sudoku"
                    filename="hard-sudoku.png"
                    footer="Sudoku difícil"
                />
            </div>
            <p>
                En el diari que la mama llegia aquell dia en concret, el sudoku fàcil tenia 28
                caselles omplertes de les 81 caselles totals mentre que el sudoku difícil en tenia
                29.{' '}
                <b>Com podia ser que el sudoku més complicat tingués més caselles omplertes!?</b> En
                altres paraules, no depen del número de caselles omplertes la dificultat del sudoku?
                Almenys, aquesta és la sensació que jo tenia. La veritat és que mai m'havia parat a
                pensar com es generen els sudokus. N'havia solucionat alguns és clar, però mai havia
                provat de generar-ne un.
            </p>
            <p>
                De fet, resulta que no és gens fàcil de generar-los. Una propietat important d'un
                sudoku ben generat és que només té una solució possible. Pot sonar obvi però,
                depenent de com i quantes caselles tingui omplertes, un sudoku pot tenir múltiples
                solucions vàlides. L'exemple més famós és el sudoku que la cadena de televisió
                britànica Sky TV va dibuixar en un turó oferint 5000£ de premi per la solució; va
                resultar que tenia{' '}
                <a
                    href="https://www.sudokuwiki.org/Sudoku_Creation_and_Grading.pdf"
                    target="_blank"
                >
                    1905 solucions possibles
                </a>
                . Aquesta anècdota va aconseguir despertar la meva curiositat.
            </p>
            <ArticleImage
                articleId={ArticleId.sudokuGeneration}
                alt="Sky TV hillside sudoku"
                filename="sky-tv-hillside.jpg"
            />
            <p>
                <b>Normalment hi hauria rumiat una estona</b>, m'hauria adonat que és una tasca
                matemàticament complexa, hauria conclòs que la quantitat de temps lliure que
                requereix trobar una solució al problema excedeix la curiositat que em genera el
                tema <b>i finalment ho hauria deixat córrer</b>. Tanmateix resulta que acabava de
                començar un any sabàtic a la feina i que, degut a les mesures preventives contra el
                COVID-19, es va cancelar el vol sense retorn que havia d'agafar el 31 de març per
                anar a viure a Austràlia. Així doncs,{' '}
                <b>
                    com que estava sense feina, tancat a casa i amb la major quantitat de temps
                    lliure de la que mai hagués disposat
                </b>{' '}
                (a Espanya el confinament pel coronavirus va començar el 15 de març i havia de durar
                almenys un mes), vaig decidir que descobriria com generar sudokus 💪
            </p>
            <p>
                El que va venir a continuació va ser un camí més llarg del que m'havia esperat. Vaig
                estar apunt de donar el projecte per perdut vàries vegades però, casualment, vaig
                mirar{' '}
                <a href="https://www.imdb.com/title/tt4276820/" target="_blank">
                    The Founder
                </a>{' '}
                entremig, la pel·lícula que explica com Ray Kroc va transformar McDonald's en la
                cadena de restaurants més gran del món gràcies a la seva persistència a prova de
                bales, cosa que em va ajudar a resistir fins al final. Aquesta odissea va tenir
                quatre fases:
            </p>
            <p>
                <b>1. Resultats, resultats, resultats</b>: No vaig poder resistir l'impuls de voler
                veure part de la feina acabada sense haver de pensar massa. Vaig assumir que el
                procés de generar un sudoku de 9x9 seria el mateix que el de generar-ne un de 4x4 i
                vaig tirar per un algoritme de consola ràpid.
            </p>
            <ArticleImage
                articleId={ArticleId.sudokuGeneration}
                className="image-600"
                alt="Command line generated sudoku"
                filename="command-line.png"
            />
            <p>
                <b>2. Punyeta! Necessito una eina gràfica</b>: En teoria, només havia d'adaptar
                l'algoritme per generar sudokus de 9x9 i aquí acabaria la història. A la pràctica,
                resulta que els sudokus de 9x9 tenen poc a veure amb els de 4x4. No aconseguia
                entendre que estava fent malament només amb la informació que l'algoritme escrivia a
                la consola, així que no vaig tenir més remei que construir una eina gràfica.
            </p>
            <ArticleImage
                articleId={ArticleId.sudokuGeneration}
                alt="Command line generation error"
                className="image-600"
                filename="command-line-error.png"
            />
            <p>
                <b>3. Cordons... això és complicat</b>: No em va portar gaire estona crear una
                aplicació web per representar sudokus de 9x9. Amb la representació visual del sudoku
                i la capacitat de fer i desfer omplint les caselles, vaig començar a entendre què
                m'havia passat per alt. Les regles bàsqies del sudoku (és a dir, un número no pot
                anar a una casella si ja hi ha el mateix número a la fila, columna o regió de la
                casella) contenen un conjunt de regles derivades que no son òbvies a primer cop
                d'ull.
            </p>
            <ArticleImage
                articleId={ArticleId.sudokuGeneration}
                alt="Web app first approach"
                className="image-600"
                filename="web-app-first-approach.png"
            />
            <p>
                <b>4. La llum al final del túnel</b>: Després de seure i donar-hi unes quantes
                voltes, com hauria d'haver fet des del principi, vaig trobar unes quantes d'aquestes
                regles derivades, que permeten descartar números de caselles. Havent descobert
                aquestes petites malxinades, només era qüestió de reescriure l'algoritme per
                considerar-les. Em va portar la seva estona, però finalment vaig aconseguir un
                generador vàlid.
            </p>
            <ArticleImage
                articleId={ArticleId.sudokuGeneration}
                alt="Web app final approach"
                className="image-600"
                filename="web-app-final-approach.png"
            />
            <p>
                Mira mama, ho he fet! En el meu cas no vaig construir un enorme imperi de les
                hamburgueses però si aquest humil{' '}
                <a href="/sudoku-generator" target="_blank">
                    generador de sudokus
                </a>
                . He d'admetre que a vegades arriba a carrerons sense sortida durant la generació,
                havent de descartar la feina i començar des de zero, però sempre acaba generant
                sudokus vàlids amb una única solució. En cas que t'ho estiguis preguntant, aquestes
                són les regles que utilitza l'algoritme per generar sudokus. De fet, és probable que
                siguin també les regles que fas servir tu a l'hora de resoldre'ls.
            </p>
            <ul>
                <li>
                    Si a una casella X només hi pot anar un número, aquest número ha d'anar a la
                    casella X i no és vàlid en cap altra casella dels grups de la casella X (fila,
                    columna i regió):
                    <ArticleImage
                        articleId={ArticleId.sudokuGeneration}
                        alt="Sudoku box single candidate example"
                        className="image-600"
                        filename="box-only-left-candidate.png"
                    />
                </li>
                <li>
                    Si, per un grup determinat, un número només pot anar a la casella X, aquest
                    número ha d'anar a la casella X i no és vàlid en cap altra casella dels grups de
                    la casella X:
                    <ArticleImage
                        articleId={ArticleId.sudokuGeneration}
                        alt="Sudoku group single candidate example"
                        className="image-600"
                        filename="group-single-candidate.png"
                    />
                </li>
                <li>
                    Si 2-3 caselles d'un grup només poden tenir els mateixos 2-3 números, aquests
                    números no són vàlids en cap altra casella del mateix grup:
                    <ArticleImage
                        articleId={ArticleId.sudokuGeneration}
                        alt="Sudoku owned candidates rule example"
                        className="image-600"
                        filename="owned-candidates.png"
                    />
                </li>
                <li>
                    Si, per una regió determinada, les úniques caselles on pot anar un número estan
                    a la mateixa fila o columna, aquest número no és vàlid a cap altra casella de la
                    mateixa fila o columna:
                    <ArticleImage
                        articleId={ArticleId.sudokuGeneration}
                        alt="Sudoku region subset rule example"
                        className="image-600"
                        filename="region-subset.png"
                    />
                </li>
            </ul>
            <p>
                I això vindria a ser tot. Vaig haver de dedicar-hi al voltant de 75 hores per
                aconseguir el que en diriem un generador acceptable. El resultat és menys complet
                del que m'havia imaginat en un principi, però les coses no són mai com esperes que
                siguin. Ets lliure de fer servir el generador si vols, però hi ha dues coses que has
                de saber: no esta del tot adaptat per mòbils i no vaig treballar en regular la
                dificultat, cosa que genera sudokus refotudament complicats. Bona sort i fins al
                proper post!
            </p>
        </React.Fragment>
    )
};
