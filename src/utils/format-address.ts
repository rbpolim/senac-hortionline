type Address = {
  street: string;
  number: string | number;
  city: string;
  state: string;
  neighborhood: string;
  zipCode: string;
};

export function formatAddress(address: Address): string {
  const { street, number, city, state, neighborhood, zipCode } = address;
  return `${street}, ${number} - ${city} - ${state} - ${neighborhood} - ${zipCode}`;
}