package com.example.encuestamusical;

import androidx.appcompat.app.AppCompatActivity;
import android.view.View;
import android.os.Bundle;
import android.widget.Button;
import android.widget.CheckBox;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {
    private CheckBox checkboxRock;
    private CheckBox checkboxPop;
    private CheckBox checkboxJazz;
    private Button buttonEnviar;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        checkboxRock = findViewById(R.id.checkboxRock);
        checkboxPop = findViewById(R.id.checkboxPop);
        checkboxJazz = findViewById(R.id.checkboxJazz);
        buttonEnviar = findViewById(R.id.buttonEnviar);

        buttonEnviar.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                StringBuilder mensaje = new StringBuilder("Has seleccionado: ");

                if (checkboxRock.isChecked()) {
                    mensaje.append("Rock, ");
                }
                if (checkboxPop.isChecked()) {
                    mensaje.append("Pop, ");
                }
                if (checkboxJazz.isChecked()) {
                    mensaje.append("Jazz, ");
                }

                if (!checkboxRock.isChecked() && !checkboxPop.isChecked() && !checkboxJazz.isChecked()) {
                    Toast.makeText(MainActivity.this, "Por favor, selecciona al menos un género musical", Toast.LENGTH_SHORT).show();
                } else {
                    Toast.makeText(MainActivity.this, mensaje, Toast.LENGTH_SHORT).show();
                }
            }
        });
    }
}