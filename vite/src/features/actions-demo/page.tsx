import { UpdateNameFormTransition } from './update-name-form-transition';
import { UpdateNameFormLegacy } from './update-name-form-legacy';

export function ActionsDemoPage() {
  return (
    <div>
      <UpdateNameFormLegacy />
      <UpdateNameFormTransition />
    </div>
  );
}
