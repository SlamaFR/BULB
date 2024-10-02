<script setup lang="ts">
definePageMeta({
  layout: 'blank',
})
</script>

<template>
  <Topbar />
  <div class="pt-10 container max-w-60em mx-auto flex flex-col gap-10">
    <Message severity="success" pt:text:class="flex-grow">
      <div class="flex flex-row items-center justify-between w-full">
        <p class="text-xl font-bold">
          L’alpha publique est désormais ouverte !
        </p>
        <Button severity="success" size="small" label="Accéder à l’éditeur" @click="navigateTo('/editor')" />
      </div>
    </Message>

    <Panel>
      <template #header>
        <h1 class="text-2xl font-bold">
          Foire aux questions
        </h1>
      </template>
      <Accordion multiple>
        <AccordionPanel value="0">
          <AccordionHeader>À quoi sert ce projet ?</AccordionHeader>
          <AccordionContent>
            <p>
              BULB permet à n’importe qui de concevoir et créer son propre plan de ligne de transports en commun.
            </p>
          </AccordionContent>
        </AccordionPanel>
        <AccordionPanel value="1">
          <AccordionHeader>Quand sera-t-il disponible ?</AccordionHeader>
          <AccordionContent>
            <p>
              Le projet est désormais ouvert en alpha publique ! Vous pouvez y accéder en cliquant sur le bouton en haut
              de cette page.
            </p>
          </AccordionContent>
        </AccordionPanel>
        <AccordionPanel value="2">
          <AccordionHeader>Peut-on créer des lignes avec un indices personnalisé ?</AccordionHeader>
          <AccordionContent>
            <p>
              Oui, il est possible de créer n’importe quel indice de ligne et de l’utiliser dans les correspondances
              également. (Exemple le RER F, le métro 25 ou le tramway T26)
            </p>
            <br>
            <p>
              À noter que ces indices personnalisés sont en cours de développement, et répondent actuellement à la
              charte graphique
              de la RATP. Certains problème graphiques peuvent survenir lors de l’utilisation d’indices personnalisés.
            </p>
          </AccordionContent>
        </AccordionPanel>
        <AccordionPanel value="3">
          <AccordionHeader>Pourra-t-on utiliser ses propres pictogrammes ?</AccordionHeader>
          <AccordionContent>
            <p>
              Oui. Cette fonctionnalité n’est pas prévue pour la première version, mais elle sera ajoutée dans une mise
              à jour future.
            </p>
          </AccordionContent>
        </AccordionPanel>
        <AccordionPanel value="4">
          <AccordionHeader>Pourra-t-on utiliser une autre charte que celle de la RATP ?</AccordionHeader>
          <AccordionContent>
            <p>
              Oui. Pour la première version, il faudra faire avec la charte de la RATP, mais il est prévu d’ajouter à
              minima celles de la SNCF et de IDFM. D’autres chartes pourront également être ajoutées par la suite.
            </p>
            <br>
            <p>
              De par la structure actuelle du projet, cette fonctionnalité n’est pas considérée comme prioritaire pour
              le moment.
            </p>
          </AccordionContent>
        </AccordionPanel>
        <AccordionPanel value="5">
          <AccordionHeader>Quels modes de transport sont disponibles ?</AccordionHeader>
          <AccordionContent>
            <p>
              Tous. Plus précisément les navettes fluviales, les bus, les téléphériques, les métros, les RER, les
              Transiliens, les tramways, et même les vélos.
            </p>
            <br>
            <p>
              Il est bon de notifier que pour les plans de bus, il n’est pas prévu de générer une carte avec les rues et
              les arrêts, mais uniquement une liste des arrêts.
            </p>
            <br>
            <p>
              Chaque mode de transport pourra avoir un thermomètre de ligne visuellement différent, mais cette
              fonctionnalité n’est pas encore disponible.
            </p>
          </AccordionContent>
        </AccordionPanel>
        <AccordionPanel value="6">
          <AccordionHeader>Peut-on dessiner plusieurs plans ?</AccordionHeader>
          <AccordionContent>
            <p>
              Oui, le site propose un système de sauvegarde et de chargement des projets. Vous pouvez commencer à
              travailler sur une ligne, la sauvegarder et recommencer à zéro pour une nouvelle ligne. Une fois la
              deuxième
              ligne sauvegardée, vous pouvez charger la première pour la modifier à nouveau.
            </p>
          </AccordionContent>
        </AccordionPanel>
        <AccordionPanel value="7">
          <AccordionHeader>Est-il possible d’ajouter des branches et des boucles aux plans ?</AccordionHeader>
          <AccordionContent>
            <p>
              Oui, les plans peuvent contenir des fourches et des boucles. Ces nouveaux éléments sont en phase de tests
              et peuvent comporter des bugs.
            </p>
            <br>
            <p>
              L’utilisation de ces éléments implique actuellement une expérience utilisateur médiocre. Cette
              fonctionnalité sera améliorée avec le temps.
            </p>
          </AccordionContent>
        </AccordionPanel>
        <AccordionPanel value="8">
          <AccordionHeader>Dans quels formats peut-on exporter les plans ?</AccordionHeader>
          <AccordionContent>
            <p>
              Actuellement, les plans sont générés au format PNG avec une forte résolution. Un export SVG ou PDF n’est
              pas encore possible et peu de pistes existent actuellement.
            </p>
          </AccordionContent>
        </AccordionPanel>
        <AccordionPanel value="9">
          <AccordionHeader>Est-ce que le code sera rendu open-source ?</AccordionHeader>
          <AccordionContent>
            <p>
              Oui, le code est consultable sur le
              <Button
                link as="a" href="https://github.com/SlamaFR/BULB" label="dépôt GitHub"
                pt:root:class="important-p-0"
              />
              . Toutes les
              ressources à l’exception de la police “Parisine” sont disponibles dessus.
            </p>
          </AccordionContent>
        </AccordionPanel>
        <AccordionPanel value="10">
          <AccordionHeader>Puis-je contribuer au projet ?</AccordionHeader>
          <AccordionContent>
            <p>
              Oui, vous pouvez contribuer en proposant des améliorations, des corrections de bugs, ou même en ajoutant
              des fonctionnalités.
            </p>
          </AccordionContent>
        </AccordionPanel>
        <AccordionPanel value="11">
          <AccordionHeader>C’est payant ?</AccordionHeader>
          <AccordionContent>
            <p>
              Non, ce projet est 100% gratuit et le restera pour toujours.
            </p>
          </AccordionContent>
        </AccordionPanel>
        <AccordionPanel value="12">
          <AccordionHeader>J’ai trouvé un bug ou une faute, comment la signaler ?</AccordionHeader>
          <AccordionContent>
            <p>
              Soit en me contactant via
              <Button
                link as="a" href="https://x.com/SlamaFR" label="X (anciennement Twitter)"
                pt:root:class="important-p-0"
              />
              , soit en ouvrant un ticket sur le
              <Button
                link as="a" href="https://github.com/SlamaFR/BULB" label="dépôt GitHub"
                pt:root:class="important-p-0"
              />
              .
            </p>
          </AccordionContent>
        </AccordionPanel>
        <AccordionPanel value="13">
          <AccordionHeader>Avec quelles technologies est fait ce projet ?</AccordionHeader>
          <AccordionContent>
            <p>
              Ce projet est fait avec Nuxt.js 3 et PrimeVue 4.
            </p>
          </AccordionContent>
        </AccordionPanel>
        <AccordionPanel value="14">
          <AccordionHeader>Le site ne fonctionne pas bien chez moi, que faire ?</AccordionHeader>
          <AccordionContent>
            <p>
              Il est fortement conseillé d’utiliser un navigateur basé sur Chromium (Google Chrome, Microsoft Edge,
              Brave, Vivaldi, Opera, etc.) pour une meilleure expérience. Les autres navigateurs (Firefox et Safari) ne
              sont pas officiellement supportés.
            </p>
            <br>
            <p>
              Il est également conseillé d’utiliser une version récente de votre navigateur pour éviter les problèmes de
              compatibilité.
            </p>
          </AccordionContent>
        </AccordionPanel>
        <AccordionPanel value="15">
          <AccordionHeader>Le rendu final est anormal, que faire ?</AccordionHeader>
          <AccordionContent>
            <p>
              Si lors de l’exportation, le rendu du plan est anormal, il est possible que le navigateur ne supporte pas
              la génération d’image. Dans ce cas, il est conseillé de changer de navigateur pour régler le problème.
            </p>
            <br>
            <p>
              Si vous observez d’autres problèmes tels qu’une image rognée ou une police incorrecte, il s’agit de bugs
              qui peuvent survenir et qui n’ont pas encore été traités.
            </p>
          </AccordionContent>
        </AccordionPanel>
        <AccordionPanel value="16">
          <AccordionHeader>Le site est-il responsive ?</AccordionHeader>
          <AccordionContent>
            <p>
              Partiellement. Il est recommandé d’utiliser un ordinateur pour une expérience optimale.
            </p>
          </AccordionContent>
        </AccordionPanel>
      </Accordion>
    </Panel>
  </div>
</template>
