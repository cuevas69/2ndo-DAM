package com.example.afuego;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.ImageButton;
import android.widget.ImageView;
import android.widget.SeekBar;
import android.widget.TextView;
import android.widget.RadioButton;
import android.widget.RadioGroup;
import android.content.SharedPreferences;
import android.preference.PreferenceManager;

public class PageConfig extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.page_config);

        ImageView inicio = findViewById(R.id.inicio);
        inicio.setOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(View v){
                Intent intent = new Intent(v.getContext(),MainActivity.class);
                startActivityForResult(intent, 0);
            }
        });

        SeekBar seekBar = findViewById(R.id.seekBar);
        TextView km = findViewById(R.id.km);
        seekBar.setOnSeekBarChangeListener(new SeekBar.OnSeekBarChangeListener() {
            @Override
            public void onProgressChanged(SeekBar seekBar, int progress, boolean fromUser) {
                // Actualiza el TextView con la distancia seleccionada
                km.setText(progress + " km");
            }

            @Override
            public void onStartTrackingTouch(SeekBar seekBar) {
                // Método requerido, pero no necesitamos realizar ninguna acción aquí.
            }

            @Override
            public void onStopTrackingTouch(SeekBar seekBar) {
                // Método requerido, pero no necesitamos realizar ninguna acción aquí.
            }
        });

        RadioGroup genderRadioGroup = findViewById(R.id.genderRadioGroup);
        RadioButton femaleRadioButton = findViewById(R.id.femaleRadioButton);
        RadioButton maleRadioButton = findViewById(R.id.maleRadioButton);
        RadioButton bothRadioButton = findViewById(R.id.bothRadioButton);

        genderRadioGroup.setOnCheckedChangeListener(new RadioGroup.OnCheckedChangeListener() {
            @Override
            public void onCheckedChanged(RadioGroup group, int checkedId) {
                SharedPreferences sharedPreferences = getSharedPreferences("MyPrefs", MODE_PRIVATE);
                SharedPreferences.Editor editor = sharedPreferences.edit();

                if (checkedId == R.id.femaleRadioButton) {
                    editor.putString("selectedGender", "Mujeres");
                } else if (checkedId == R.id.maleRadioButton) {
                    editor.putString("selectedGender", "Hombres");
                } else if (checkedId == R.id.bothRadioButton) {
                    editor.putString("selectedGender", "Ambos");
                }
                editor.apply();

                String selectedGender = sharedPreferences.getString("selectedGender", "");

                if (selectedGender.equals("Mujeres")) {
                    femaleRadioButton.setChecked(true);
                } else if (selectedGender.equals("Hombres")) {
                    maleRadioButton.setChecked(true);
                } else if (selectedGender.equals("Ambos")) {
                    bothRadioButton.setChecked(true);
                }
            }
        });

        SeekBar seekBar2 = findViewById(R.id.seekBar2);
        TextView km2 = findViewById(R.id.km2);
        seekBar2.setOnSeekBarChangeListener(new SeekBar.OnSeekBarChangeListener() {
            @Override
            public void onProgressChanged(SeekBar seekBar2, int progress, boolean fromUser) {
                // Actualiza el TextView con la distancia seleccionada
                km2.setText(progress + " años");
            }

            @Override
            public void onStartTrackingTouch(SeekBar seekBar2) {
                // Método requerido, pero no necesitamos realizar ninguna acción aquí.
            }

            @Override
            public void onStopTrackingTouch(SeekBar seekBar2) {
                // Método requerido, pero no necesitamos realizar ninguna acción aquí.
            }
        });
    }
}
