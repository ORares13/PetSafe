from flask import Flask, jsonify
from flask_cors import CORS
import board
import adafruit_ahtx0

i2c = board.I2C()
sensor = adafruit_ahtx0.AHTx0(i2c)

app = Flask(__name__)
CORS(app)

@app.route('/sensor')
def get_sensor_data():
    try:
        temperature = sensor.temperature
        humidity = sensor.relative_humidity
        return jsonify({'temperature': temperature, 'humidity': humidity})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
