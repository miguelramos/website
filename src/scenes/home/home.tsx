import { type JSX, useEffect, useState } from 'react';

import { Bar, Body, Contact, Hero, Resume, Sidebar, Suspense } from '@/common/compositions';

import type { Content } from './types';

type Model = {
  data: Content | null;
  hasError: boolean;
  isLoading: boolean;
};

/**
 * Homepage scene
 */

export default function HomePage(): JSX.Element {
  const [model, setModel] = useState<Model>({ data: null, hasError: false, isLoading: true });

  const fetchData = async () => {
    const response = await fetch('/data/content.json');

    await response.json()
      .then(({ data }: { data: Content }) => setModel({ data, hasError: false, isLoading: false }))
      .catch(() => setModel({ data: null, hasError: true, isLoading: true }));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {
        model.isLoading || !model.data
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
