import { Random } from "mockjs";
function createUuid() {
  return Random.id();
}

export default createUuid;
