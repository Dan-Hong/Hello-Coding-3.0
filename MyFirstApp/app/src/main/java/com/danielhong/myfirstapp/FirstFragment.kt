package com.danielhong.myfirstapp

import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Button
import android.widget.SeekBar
import android.widget.TextView
import android.widget.Toast
import androidx.navigation.fragment.findNavController

/**
 * A simple [Fragment] subclass as the default destination in the navigation.
 */
class FirstFragment : Fragment() {

    var seekbarValue = 10

    override fun onCreateView(
            inflater: LayoutInflater, container: ViewGroup?,
            savedInstanceState: Bundle?
    ): View? {
        // Inflate the layout for this fragment
        return inflater.inflate(R.layout.fragment_first, container, false)
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        view.findViewById<Button>(R.id.button_first).setOnClickListener {
            findNavController().navigate(R.id.action_FirstFragment_to_SecondFragment)
        }

        view.findViewById<Button>(R.id.generate_random_number_button).setOnClickListener {

            generateRandomNumber(view)
        }

        view.findViewById<TextView>(R.id.value_selected_textview)

        val seekbar = view.findViewById<SeekBar>(R.id.seekBar)
        seekbar.setOnSeekBarChangeListener(object: SeekBar.OnSeekBarChangeListener {
            override fun onProgressChanged(seekBar: SeekBar?, progress: Int, fromUser: Boolean) {
                seekbarValue = progress
                val valueSelectedTextView = view.findViewById<TextView>(R.id.value_selected_textview)
                valueSelectedTextView.text = "Generate a number between 0 and $seekbarValue"
            }

            override fun onStartTrackingTouch(seekBar: SeekBar?) {

            }

            override fun onStopTrackingTouch(seekBar: SeekBar?) {

            }

        })
    }

    private fun generateRandomNumber(view: View) {
        val random = java.util.Random()
        val randomNumber = random.nextInt(seekbarValue)
        val randomNumberTextView = view.findViewById<TextView>(R.id.random_number_textview)
        randomNumberTextView.text = randomNumber.toString()
    }
}