/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';

import { Bar, Body, Contact, Hero, Resume, Sidebar, Suspense } from '@/common/compositions';

/**
 * Homepage scene
 */

export default function HomePage(): JSX.Element {
  const [model, setState] = useState<{data: any; hasError: boolean; isLoading: boolean}>({ data: {}, hasError: false, isLoading: true });

  const fetchData = async () => {
    const response = await fetch('/data/content.json');

    await response.json()
      .then(({ data }) => setState({ data, hasError: false, isLoading: false }))
      .catch(() => setState({ data: {}, hasError: true, isLoading: true }));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      { 
        model.isLoading
          ? <Suspense hasError={model.hasError} /> 
          : (
            <>
              <Sidebar>
                <Sidebar.Avatar picture={model.data.personal.avatar}>
                  <Sidebar.Avatar.Name name={model.data.personal.name} />

                  <Sidebar.Avatar.Title title={model.data.personal.title} />

                  <Sidebar.Avatar.Title title={model.data.personal.sentence} />
                </Sidebar.Avatar>

                <Sidebar.Content>
                  <Sidebar.Person persons={model.data.person} />

                  <Sidebar.Language languages={model.data.languages.collection} title={model.data.languages.title} />

                  <Sidebar.Skill skills={model.data.skills.collection} title={model.data.skills.title} />
          
                  <Sidebar.Knowledge items={model.data.knowledge.collection} title={model.data.knowledge.title} />

                  <a className={'ui-sidebar__download'} href={'/assets/data/cv-miguel-ramos.zip'}>
                    <span>Download CV</span> <img alt={'Donwload cv'} className={'ui-icon'} src={'/assets/icons/download.svg'} />
                  </a>
                </Sidebar.Content>

                <Sidebar.Footer>
                  <Contact contacts={model.data.contacts} />
                </Sidebar.Footer>
              </Sidebar>

              <Body>
                <Body.Container>
                  <Hero description={model.data.hero.description} info={model.data.hero.info} sentences={model.data.hero.sentences} title={model.data.hero.title} />

                  <Bar experiences={model.data.experience} />

                  <Resume resumes={model.data.resume} />
                </Body.Container>
              </Body>
            </>
          ) 
      }
    </>
  );
}
