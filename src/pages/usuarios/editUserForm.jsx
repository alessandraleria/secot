import React, { useEffect, useState } from "react";

import Sidebar from "../../components/sidebar/sidebar";

import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import {
  Button,
  TextField,
  MenuItem,
  Grid,
  FormGroup,
  FormControlLabel,
  Switch,
  OutlinedInput,
  InputLabel,
  FormControl,
  ListItemText,
  Select,
  Checkbox,
  Stack,
} from "@mui/material";

import { useFormik } from "formik";
import * as yup from "yup";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const interesses = [
  "Programação",
  "PHP",
  "Node",
  "CodeIgniter",
  "React",
  "React Native",
  "MySQL",
];

const validationSchema = yup.object({});

const Content = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      editable_name: true,
      password: "",
      roles: "",
      city: "",
      state: "",
      job: "",
      area: "",
      university: "",
      course: "",
      interests: "",
      last_active: "",
      hour_format: "",
      created_at: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  const [personInterest, setPersonInterest] = React.useState([]);

  const handleInterestChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonInterest(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const [lastAccess, setLastAccess] = React.useState(
    dayjs("2014-08-18T21:11:54")
  );

  const handleLastAccess = (newValue) => {
    setLastAccess(newValue);
  };

  const [createdAt, setCreatedAt] = React.useState(
    dayjs("2014-08-18T21:11:54")
  );

  const handleCreatedAt = (newValue) => {
    setCreatedAt(newValue);
  };
  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={2}>
        <Grid xs={12} sx={{ marginLeft: "1em" }}>
          <h1>Edição de Usuários</h1>
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            id="name"
            name="name"
            label="Nome"
            size="small"
            fullWidth
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            id="email"
            name="email"
            label="E-mail"
            size="small"
            fullWidth
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <TextField
            id="password"
            name="password"
            label="Senha"
            size="small"
            fullWidth
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <TextField
            id="roles"
            name="roles"
            select
            label="Nível do Usuário"
            size="small"
            fullWidth
            value={formik.values.roles}
            onChange={formik.handleChange}
            error={formik.touched.roles && Boolean(formik.errors.roles)}
            helperText={formik.touched.roles && formik.errors.roles}
          >
            <MenuItem key={1} value={1}>
              Administrator
            </MenuItem>
            <MenuItem key={1} value={1}>
              President
            </MenuItem>
            <MenuItem key={1} value={1}>
              Manager
            </MenuItem>
            <MenuItem key={1} value={1}>
              Spectator
            </MenuItem>
          </TextField>
        </Grid>

        <Grid item xs={12} md={4}>
          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  defaultChecked
                  id="editable_name"
                  name="editable_name"
                  checked={formik.values.editable_name}
                  onChange={formik.handleChange}
                />
              }
              label="Nome Editável"
            />
          </FormGroup>
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            id="city"
            name="city"
            select
            label="Cidade"
            size="small"
            fullWidth
            value={formik.values.city}
            onChange={formik.handleChange}
            error={formik.touched.city && Boolean(formik.errors.city)}
            helperText={formik.touched.city && formik.errors.city}
          >
            <MenuItem key={1} value={1}>
              Label
            </MenuItem>
          </TextField>
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            id="state"
            name="state"
            select
            label="Estado"
            size="small"
            fullWidth
            value={formik.values.state}
            onChange={formik.handleChange}
            error={formik.touched.state && Boolean(formik.errors.state)}
            helperText={formik.touched.state && formik.errors.state}
          >
            <MenuItem key={1} value={1}>
              Label
            </MenuItem>
          </TextField>
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            id="job"
            name="job"
            label="Trabalho"
            size="small"
            fullWidth
            value={formik.values.job}
            onChange={formik.handleChange}
            error={formik.touched.job && Boolean(formik.errors.job)}
            helperText={formik.touched.job && formik.errors.job}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            id="area"
            name="area"
            label="Área"
            size="small"
            fullWidth
            value={formik.values.area}
            onChange={formik.handleChange}
            error={formik.touched.area && Boolean(formik.errors.area)}
            helperText={formik.touched.area && formik.errors.area}
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <TextField
            id="university"
            name="university"
            label="Universidade"
            size="small"
            fullWidth
            value={formik.values.university}
            onChange={formik.handleChange}
            error={
              formik.touched.university && Boolean(formik.errors.university)
            }
            helperText={formik.touched.university && formik.errors.university}
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <TextField
            id="course"
            name="course"
            label="Curso"
            size="small"
            fullWidth
            value={formik.values.course}
            onChange={formik.handleChange}
            error={formik.touched.course && Boolean(formik.errors.course)}
            helperText={formik.touched.course && formik.errors.course}
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <FormControl fullWidth size="small">
            <InputLabel id="demo-multiple-checkbox-label">
              Interesses
            </InputLabel>
            <Select
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              multiple
              value={personInterest}
              onChange={handleInterestChange}
              input={<OutlinedInput label="Interesses" />}
              renderValue={(selected) => selected.join(", ")}
              MenuProps={MenuProps}
            >
              {interesses.map((interesse) => (
                <MenuItem key={interesse} value={interesse}>
                  <Checkbox checked={personInterest.indexOf(interesse) > -1} />
                  <ListItemText primary={interesse} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} md={4}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Stack spacing={3}>
              <DateTimePicker
                label="Último Acesso"
                value={lastAccess}
                onChange={handleLastAccess}
                renderInput={(params) => <TextField size="small" {...params} />}
              />
            </Stack>
          </LocalizationProvider>
        </Grid>

        <Grid item xs={12} md={4}>
          <TextField
            id="roles"
            select
            label="Formato do Horário"
            size="small"
            fullWidth
          >
            <MenuItem key={1} value={1}>
              24h (14:00)
            </MenuItem>

            <MenuItem key={1} value={1}>
              12h (2:00 pm)
            </MenuItem>
          </TextField>
        </Grid>

        <Grid item xs={12} md={4}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Stack spacing={3}>
              <DateTimePicker
                label="Criado em"
                value={createdAt}
                onChange={handleCreatedAt}
                renderInput={(params) => <TextField size="small" {...params} />}
              />
            </Stack>
          </LocalizationProvider>
        </Grid>
      </Grid>

      <Grid container spacing={2} marginTop={3} justifyContent="flex-end">
        <Grid item>
          <Button variant="outlined" color="primary">
            Cancelar
          </Button>
        </Grid>
        <Grid item>
          <Button variant="outlined" color="error" type="submit">
            Salvar
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

const CadastroUsuarios = () => {
  return <Sidebar content={<Content />} />;
};

export default CadastroUsuarios;
