import { ReactElement } from "react";
import {
  Container,
  Input,
  TextField,
} from "@material-ui/core";
import HeaderComponent from "../../steppers-components/header/header.component";
import { IProfileSectionProps } from "./profile.section.type";
import { UAUTextMaskCustomComponent } from "@components";

function ProfileSection({
  setForm,
  formData,
}: IProfileSectionProps): ReactElement {

  const { firstname, lastname, nickname, phoneNumber } = formData;

  //TODO: Fix date picker for forms after release.
  return (
    <Container maxWidth="sm" disableGutters>
      <HeaderComponent
        title="Queremos saber mais sobre você!"
        subTitle=" Dica: Os campos marcados com (*) são obrigatórios."
      />
      <TextField
        label="Primeiro nome"
        name="firstname"
        value={firstname}
        onChange={setForm}
        margin="normal"
        fullWidth
        autoComplete="new-password"
      />
      <TextField
        label="Sobrenome"
        name="lastname"
        value={lastname}
        onChange={setForm}
        margin="normal"
        fullWidth
        autoComplete="new-password"
      />
      <TextField
        label="Qual seu apelido ou nome social?"
        name="nickname"
        value={nickname}
        onChange={setForm}
        margin="normal"
        fullWidth
        autoComplete="new-password"
      />
      <Input
        value={phoneNumber}
        onChange={setForm}
        name="phoneNumber"
        inputComponent={UAUTextMaskCustomComponent as any}
        fullWidth
      />
    </Container>
  );
}

export { ProfileSection };
