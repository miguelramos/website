type Contact = {
  id: number;
  icon: string;
  link: string;
  title: string;
}

export type ContactProps = {
  contacts: Contact[];
}
