import {
  Box,
  Container,
  IconButton,
  TextField,
  Typography,
} from "@material-ui/core";
import { InfoOutlined } from "@material-ui/icons";
import { DefaultFormData } from "../../sign-up.stepper.section.types";
import { SetForm } from "react-hooks-helper";
import HeaderComponent from "../../steppers-components/header/header.component";
import { IGetUserAddressResponse } from "../../../../../../services/address/types/get-user-address-response.types";

interface IAddressSectionProps {
  formData: DefaultFormData;
  setForm: SetForm;
  addressInfo: IGetUserAddressResponse
}

function AddressSection({ setForm, formData, addressInfo }: IAddressSectionProps) {
  const { cep } = formData;
  const { data: {
    city: userAddressCity,
    district: userAddressNeiborhood,
  } } = addressInfo

  console.log('tem coisa errada aew: ', userAddressCity)
  return (
    <Container maxWidth="sm" disableGutters>
      <HeaderComponent
        title="Otimo! Agora queremos saber de onde você fala"
        subTitle="Dica: Essas etapas são importantes para melhorar sua experiência &#128522;"
      />
      <TextField
        label="CEP (apenas números)"
        type="number"
        name="cep"
        value={cep}
        onChange={setForm}
        margin="normal"
        autoComplete="new-password"
        fullWidth
        inputProps={{ maxLength: "8" }}
      />
      <TextField
        label="Cidade"
        name="city"
        value={userAddressCity}
        onChange={setForm}
        disabled
        margin="normal"
        fullWidth
      />
      <TextField
        label="Bairro"
        name="neighborhood"
        value={userAddressNeiborhood}
        onChange={setForm}
        disabled
        margin="normal"
        fullWidth
      />
    </Container>
  );
}

export { AddressSection };
